// Teacher Dashboard - No coding required for teachers

// Import Firebase functions
import { 
    getAuth, 
    onAuthStateChanged, 
    signOut 
} from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';
import { 
    getFirestore, 
    collection, 
    query, 
    where, 
    getDocs, 
    doc, 
    getDoc, 
    updateDoc,
    orderBy,
    limit,
    onSnapshot
} from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
import { app } from '../firebase.js';

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize the teacher dashboard when the DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Check if user is authenticated and is a teacher
    const { user, userData } = await checkAuth();
    if (!user) {
        window.location.href = '/auth/login.html';
        return;
    }

    // Initialize the dashboard
    await initTeacherDashboard(user.uid, userData);
    
    // Set up real-time updates
    setupRealtimeUpdates(user.uid);
});

// Check if user is authenticated and get user data
async function checkAuth() {
    try {
        // Wait for auth state to be determined
        const user = await new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                unsubscribe();
                resolve(user);
            });
        });

        if (!user) {
            window.location.href = '/auth/login.html';
            return null;
        }

        // Get user profile to check role
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (!userDoc.exists() || userDoc.data().role !== 'teacher') {
            window.location.href = '/dashboard.html';
            return null;
        }

        const userData = userDoc.data();
        
        // Update UI with teacher's name
        const teacherNameElement = document.getElementById('teacher-name');
        if (teacherNameElement) {
            teacherNameElement.textContent = userData.displayName || userData.name || 'Teacher';
        }
        
        // Update welcome message
        const welcomeMessage = document.querySelector('.welcome-section .lead');
        if (welcomeMessage) {
            welcomeMessage.textContent = `Here's what's happening with your classes today, ${userData.firstName || 'Teacher'}.`;
        }

        return { user, userData };
    } catch (error) {
        console.error('Auth check failed:', error);
        showError('Failed to load your dashboard. Please try again.');
        return null;
    }
}

// Initialize the teacher dashboard
async function initTeacherDashboard(teacherId, userData) {
    try {
        // Update teacher's name in the UI
        updateTeacherProfile(userData);
        
        // Load all dashboard components
        await Promise.all([
            loadClassStats(teacherId),
            loadRecentTests(teacherId),
            loadStudentList(teacherId),
            setupEventListeners(teacherId)
        ]);
        
        // Update UI to show dashboard is ready
        document.querySelector('.dashboard-content').classList.add('loaded');
    } catch (error) {
        console.error('Error initializing dashboard:', error);
        showError('Failed to initialize dashboard. Please refresh the page.');
    }
}

// Load class statistics
async function loadClassStats(teacherId) {
    try {
        // Get tests created by this teacher
        const testsQuery = query(
            collection(db, 'tests'),
            where('teacherId', '==', teacherId)
        );
        
        // Get students assigned to this teacher
        const studentsQuery = query(
            collection(db, 'users'),
            where('role', '==', 'student'),
            where('teacherId', '==', teacherId)
        );
        
        // Get submissions for this teacher's tests
        const submissionsQuery = query(
            collectionGroup(db, 'submissions'),
            where('teacherId', '==', teacherId)
        );
        
        const [testsSnapshot, studentsSnapshot, submissionsSnapshot] = await Promise.all([
            getDocs(testsQuery),
            getDocs(studentsQuery),
            getDocs(submissionsQuery)
        ]);
        
        // Calculate statistics
        const totalTests = testsSnapshot.size;
        const totalStudents = studentsSnapshot.size;
        
        // Calculate average score and pending grading
        let totalScore = 0;
        let gradedSubmissions = 0;
        let pendingGrading = 0;
        
        submissionsSnapshot.forEach(doc => {
            const submission = doc.data();
            if (submission.grade !== undefined) {
                totalScore += submission.grade;
                gradedSubmissions++;
            } else {
                pendingGrading++;
            }
        });
        
        const averageScore = gradedSubmissions > 0 ? (totalScore / gradedSubmissions).toFixed(1) : 0;
        
        // Update the UI with the stats
        const statValues = [
            totalTests,
            totalStudents,
            averageScore,
            pendingGrading
        ];
        
        document.querySelectorAll('.stat-card h3').forEach((el, index) => {
            el.textContent = statValues[index];
        });
        
        // Update any progress bars or charts
        updateProgressBars({
            totalTests,
            totalStudents,
            averageScore,
            pendingGrading
        });
        
    } catch (error) {
        console.error('Error loading class stats:', error);
        showError('Failed to load class statistics. Please try again.');
    }
}

// Load recent tests
async function loadRecentTests(teacherId) {
    try {
        const testsQuery = query(
            collection(db, 'tests'),
            where('teacherId', '==', teacherId),
            orderBy('createdAt', 'desc'),
            limit(5)
        );
        
        const testsSnapshot = await getDocs(testsQuery);
        const testsContainer = document.querySelector('#recent-tests');
        if (!testsContainer) return;
        
        // Clear existing test items
        testsContainer.innerHTML = '';
        
        if (testsSnapshot.empty) {
            testsContainer.innerHTML = `
                <div class="alert alert-info">
                    You haven't created any tests yet. Click "Create Test" to get started.
                </div>
            `;
            return;
        }
        
        // Get submissions for each test
        const testsWithSubmissions = await Promise.all(testsSnapshot.docs.map(async (testDoc) => {
            const testData = testDoc.data();
            const submissionsQuery = query(
                collection(db, 'tests', testDoc.id, 'submissions')
            );
            const submissionsSnapshot = await getDocs(submissionsQuery);
            
            return {
                id: testDoc.id,
                ...testData,
                submissions: submissionsSnapshot.size,
                // Count how many submissions are graded
                graded: submissionsSnapshot.docs.filter(doc => doc.data().grade !== undefined).length
            };
        }));
        
        // Add each test to the UI
        testsWithSubmissions.forEach(test => {
            testsContainer.appendChild(createTestElement(test));
        });
        
    } catch (error) {
        console.error('Error loading recent tests:', error);
        showError('Failed to load recent tests. Please try again.');
    }
}

// Load student list
async function loadStudentList(teacherId) {
    try {
        const studentsQuery = query(
            collection(db, 'users'),
            where('role', '==', 'student'),
            where('teacherId', '==', teacherId)
        );
        
        const studentsSnapshot = await getDocs(studentsQuery);
        const studentsContainer = document.querySelector('#student-list');
        if (!studentsContainer) return;
        
        // Clear existing student items
        studentsContainer.innerHTML = '';
        
        if (studentsSnapshot.empty) {
            studentsContainer.innerHTML = `
                <div class="alert alert-info">
                    You don't have any students assigned yet.
                </div>
            `;
            return;
        }
        
        // Get student data with progress
        const studentsWithProgress = await Promise.all(studentsSnapshot.docs.map(async (doc) => {
            const studentData = doc.data();
            
            // Get student's submissions to calculate progress
            const submissionsQuery = query(
                collectionGroup(db, 'submissions'),
                where('studentId', '==', doc.id)
            );
            
            const submissionsSnapshot = await getDocs(submissionsQuery);
            const totalSubmissions = submissionsSnapshot.size;
            const completedSubmissions = submissionsSnapshot.docs.filter(
                sub => sub.data().status === 'completed'
            ).length;
            
            const progress = totalSubmissions > 0 
                ? Math.round((completedSubmissions / totalSubmissions) * 100) 
                : 0;
            
            return {
                id: doc.id,
                name: studentData.displayName || `${studentData.firstName} ${studentData.lastName || ''}`.trim(),
                email: studentData.email,
                progress: progress,
                lastActive: studentData.lastActive?.toDate?.() || new Date(),
                grade: studentData.grade || 'N/A'
            };
        }));
        
        // Sort students by name
        studentsWithProgress.sort((a, b) => a.name.localeCompare(b.name));
        
        // Add each student to the UI
        studentsWithProgress.forEach(student => {
            studentsContainer.appendChild(createStudentElement(student));
        });
        
    } catch (error) {
        console.error('Error loading student list:', error);
        showError('Failed to load student list. Please try again.');
    }
}

// Create test element for the UI
function createTestElement(test) {
    const testElement = document.createElement('div');
    testElement.className = 'activity-item';
    testElement.innerHTML = `
        <div class="activity-icon">
            <i class="fas fa-${test.type === 'reading' ? 'book-reader' : test.type === 'listening' ? 'headphones' : 'file-alt'}"></i>
        </div>
        <div class="activity-details">
            <h4>${test.title}</h4>
            <p>${test.graded || 0} out of ${test.submissions || 0} submissions graded</p>
            <small>Created on ${formatDate(test.createdAt?.toDate?.() || new Date())}</small>
            ${test.dueDate ? `<small>• Due: ${formatDate(test.dueDate?.toDate?.() || test.dueDate)}</small>` : ''}
        </div>
        <div class="activity-actions">
            <button class="btn btn-outline btn-sm grade-test" data-test-id="${test.id}">
                ${test.submissions > test.graded ? 'Grade' : 'View'}
            </button>
            <button class="btn btn-link btn-sm view-results" data-test-id="${test.id}">
                Results
            </button>
        </div>
    `;
    
    return testElement;
}

// Create student element for the UI
function createStudentElement(student) {
    const studentElement = document.createElement('div');
    studentElement.className = 'student-card';
    studentElement.innerHTML = `
        <div class="student-avatar">
            <i class="fas fa-user-graduate"></i>
        </div>
        <div class="student-info">
            <h5>${student.name}</h5>
            <div class="student-meta">
                <span class="grade">Grade ${student.grade || 'N/A'}</span>
                <span class="level">${student.level || 'Beginner'}</span>
            </div>
            <div class="progress-container">
                <div class="progress-bar" style="width: ${student.progress || 0}%"></div>
                <span class="progress-text">${student.progress || 0}%</span>
            </div>
        </div>
        <button class="btn btn-sm btn-view" data-student-id="${student.id}">
            <i class="fas fa-chart-line"></i> View Progress
        </button>
    `;
    
    return studentElement;
}

// Setup event listeners for the dashboard
function setupEventListeners(teacherId) {
    // Create Test button
    document.getElementById('create-test-btn').addEventListener('click', () => {
        showCreateTestModal(teacherId);
    });

    // View student progress
    document.addEventListener('click', async (e) => {
        if (e.target.closest('.btn-view[data-student-id]')) {
            const studentId = e.target.closest('.btn-view').dataset.studentId;
            await showStudentProgress(studentId);
        }
        
        // View test results
        if (e.target.closest('.btn-view[data-test-id]')) {
            const testId = e.target.closest('.btn-view').dataset.testId;
            await showTestResults(testId);
        }
    });

    // Logout button
    document.getElementById('logout-btn').addEventListener('click', async () => {
        try {
            await window.alphariaFirebase.signOut(window.alphariaFirebase.auth);
            window.location.href = '/auth/login.html';
        } catch (error) {
            console.error('Logout failed:', error);
            showError('Failed to log out');
        }
    });
}

// Show create test modal
function showCreateTestModal(teacherId) {
    const modal = document.getElementById('create-test-modal');
    const form = document.getElementById('create-test-form');
    
    // Reset form
    form.reset();
    
    // Show modal
    modal.style.display = 'block';
    
    // Close modal when clicking outside
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
    
    // Handle form submission
    form.onsubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const testData = {
            title: formData.get('title'),
            description: formData.get('description'),
            teacherId: teacherId,
            questions: [],
            duration: parseInt(formData.get('duration')) || 30,
            passingScore: parseInt(formData.get('passing-score')) || 70
        };
        
        try {
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating...';
            
            // Create test
            const result = await window.alphariaFirebase.createTest(testData);
            
            if (result.success) {
                // Close modal and refresh tests
                modal.style.display = 'none';
                await loadRecentTests(teacherId);
                showSuccess('Test created successfully!');
            } else {
                throw new Error('Failed to create test');
            }
        } catch (error) {
            console.error('Error creating test:', error);
            showError('Failed to create test. Please try again.');
        } finally {
            // Reset button state
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    };
}

// Show student progress
async function showStudentProgress(studentId) {
    // Implementation for showing student progress modal
    // This would include charts and detailed test history
    console.log('Show progress for student:', studentId);
    // Show a modal with student progress
}

// Show test results
async function showTestResults(testId) {
    // Implementation for showing test results
    // This would include question analysis and student performance
    console.log('Show results for test:', testId);
    // Show a modal with test results
}

// Helper function to format dates
function formatDate(date) {
    if (!date) return 'N/A';
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(date);
}

// Show error message
function showError(message) {
    // Implementation for showing error messages
    console.error(message);
    // Could use a toast or alert library here
    alert('Error: ' + message);
}

// Show success message
function showSuccess(message) {
    // Implementation for showing success messages
    console.log(message);
    // Could use a toast or alert library here
    alert('Success: ' + message);
}

// Update progress bars or charts
function updateProgressBars(stats) {
    // Update progress bars in the stats cards
    const progressBars = document.querySelectorAll('.stat-card .progress-bar');
    if (progressBars.length > 0) {
        // Update completion rate progress bar (if exists)
        const completionRate = stats.averageScore || 0;
        progressBars[0].style.width = `${completionRate}%`;
        progressBars[0].setAttribute('aria-valuenow', completionRate);
        
        // Update other progress bars if needed
        if (progressBars.length > 1) {
            // Update student engagement (example)
            const engagementRate = Math.min(100, Math.max(0, (stats.totalSubmissions || 0) / ((stats.totalStudents || 1) * (stats.totalTests || 1)) * 100));
            progressBars[1].style.width = `${engagementRate}%`;
            progressBars[1].setAttribute('aria-valuenow', engagementRate);
        }
    }
    
    // Update any charts if they exist
    updateCharts(stats);
}

// Update charts (if any)
function updateCharts(stats) {
    // This is where you would update any charts on the dashboard
    // For example, using Chart.js or any other charting library
    console.log('Updating charts with stats:', stats);
}

// Set up real-time updates for the dashboard
function setupRealtimeUpdates(teacherId) {
    try {
        // Real-time updates for tests
        const testsQuery = query(
            collection(db, 'tests'),
            where('teacherId', '==', teacherId),
            orderBy('createdAt', 'desc'),
            limit(5)
        );
        
        // Real-time updates for students
        const studentsQuery = query(
            collection(db, 'users'),
            where('role', '==', 'student'),
            where('teacherId', '==', teacherId)
        );
        
        // Subscribe to test changes
        const unsubscribeTests = onSnapshot(testsQuery, (snapshot) => {
            console.log('Tests updated, refreshing...');
            loadRecentTests(teacherId);
            loadClassStats(teacherId);
        });
        
        // Subscribe to student changes
        const unsubscribeStudents = onSnapshot(studentsQuery, (snapshot) => {
            console.log('Students updated, refreshing...');
            loadStudentList(teacherId);
            loadClassStats(teacherId);
        });
        
        // Store unsubscribe functions for cleanup
        window.teacherDashboardUnsubscribe = () => {
            unsubscribeTests();
            unsubscribeStudents();
        };
        
        // Clean up on page unload
        window.addEventListener('beforeunload', window.teacherDashboardUnsubscribe);
        
    } catch (error) {
        console.error('Error setting up real-time updates:', error);
    }
}

// Update teacher profile in the UI
function updateTeacherProfile(userData) {
    // Update welcome message
    const teacherNameElement = document.getElementById('teacher-name');
    if (teacherNameElement) {
        const name = userData.name || userData.displayName?.split(' ')[0] || 'Teacher';
        teacherNameElement.textContent = name;
    }
    
    // Update the welcome message text
    const welcomeMessage = document.querySelector('.welcome-section .lead');
    if (welcomeMessage) {
        const name = userData.name || userData.displayName?.split(' ')[0] || 'Teacher';
        welcomeMessage.textContent = `Here's what's happening with your classes today, ${name}.`;
    }
    
    // Update profile picture if available
    const profilePic = document.querySelector('.user-profile .avatar');
    if (profilePic && userData.photoURL) {
        profilePic.innerHTML = `<img src="${userData.photoURL}" alt="${userData.firstName || 'Teacher'}">`;
    }
}

// Export functions for testing or other modules
window.teacherDashboard = {
    init: initTeacherDashboard,
    loadClassStats,
    loadRecentTests,
    loadStudentList,
    showCreateTestModal,
    showStudentProgress,
    showTestResults
};
