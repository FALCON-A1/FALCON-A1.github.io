// Import the Firebase functions we need
import { 
    getFirestore, 
    collection, 
    addDoc, 
    updateDoc, 
    doc,
    serverTimestamp
} from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';

// Export the init function to be called after Firebase is initialized
export function initTestCreator() {
    // Get current user
    const user = window.auth.currentUser;
    if (!user) {
        // Redirect to login if not authenticated
        window.location.href = 'login.html';
        return;
    }
    // DOM Elements
    const sectionsContainer = document.getElementById('sections-container');
    const addSectionBtn = document.getElementById('add-section-btn');
    const saveDraftBtn = document.getElementById('save-draft-btn');
    const previewTestBtn = document.getElementById('preview-test-btn');
    const publishTestBtn = document.getElementById('publish-test-btn');
    const sectionTemplate = document.getElementById('section-template');
    const wordItemTemplate = document.getElementById('word-item-template');
    
    // State
    let sectionCount = 0;
    let itemCount = 0;
    
    // Initialize the test creator
    function init() {
        // Add event listeners
        if (addSectionBtn) addSectionBtn.addEventListener('click', addNewSection);
        if (saveDraftBtn) saveDraftBtn.addEventListener('click', saveAsDraft);
        if (previewTestBtn) previewTestBtn.addEventListener('click', previewTest);
        if (publishTestBtn) publishTestBtn.addEventListener('click', publishTest);
        
        // Add the first section by default
        addNewSection();
    }
    
    // Initialize the test creator
    init();
    
    // Add a new section to the test
    function addNewSection() {
        sectionCount++;
        const sectionId = `section-${sectionCount}`;
        
        // Clone the section template
        const sectionElement = sectionTemplate.content.cloneNode(true);
        const sectionCard = sectionElement.querySelector('.section-card');
        sectionCard.dataset.sectionId = sectionId;
        
        // Update section title
        const titleInput = sectionElement.querySelector('.section-title-input');
        titleInput.value = `Section ${sectionCount}`;
        titleInput.addEventListener('input', (e) => {
            const title = e.target.value || `Section ${sectionCount}`;
            sectionCard.querySelector('.section-title').textContent = title;
        });
        
        // Add event listeners for section actions
        const addItemBtn = sectionElement.querySelector('.add-item-btn');
        const deleteSectionBtn = sectionElement.querySelector('.delete-section');
        const moveSectionUpBtn = sectionElement.querySelector('.move-section-up');
        const moveSectionDownBtn = sectionElement.querySelector('.move-section-down');
        const sectionTypeSelect = sectionElement.querySelector('.section-type');
        const itemsContainer = sectionElement.querySelector('.items-container');
        
        addItemBtn.addEventListener('click', () => addNewItem(itemsContainer, sectionTypeSelect.value));
        deleteSectionBtn.addEventListener('click', () => sectionCard.remove());
        
        moveSectionUpBtn.addEventListener('click', () => {
            const prevSibling = sectionCard.previousElementSibling;
            if (prevSibling) {
                sectionCard.parentNode.insertBefore(sectionCard, prevSibling);
            }
        });
        
        moveSectionDownBtn.addEventListener('click', () => {
            const nextSibling = sectionCard.nextElementSibling;
            if (nextSibling) {
                sectionCard.parentNode.insertBefore(nextSibling, sectionCard);
            }
        });
        
        // Handle section type change
        sectionTypeSelect.addEventListener('change', (e) => {
            // Clear existing items
            itemsContainer.innerHTML = '';
            // Add a new item of the selected type
            addNewItem(itemsContainer, e.target.value);
        });
        
        // Add the section to the container
        sectionsContainer.appendChild(sectionElement);
        
        // Initialize sortable for items
        initSortable(itemsContainer);
        
        // Add the first item to the section
        addNewItem(itemsContainer, sectionTypeSelect.value);
    }
    
    // Add a new item to a section
    function addNewItem(container, type) {
        itemCount++;
        const itemId = `item-${itemCount}`;
        
        // Clone the appropriate template based on item type
        let itemElement;
        
        switch (type) {
            case 'words':
            case 'sentences':
                itemElement = wordItemTemplate.content.cloneNode(true);
                const itemCard = itemElement.querySelector('.item-card');
                itemCard.dataset.itemId = itemId;
                
                // Set appropriate placeholder based on type
                const textInput = itemElement.querySelector('.item-text');
                textInput.placeholder = type === 'words' ? 'Enter word' : 'Enter sentence';
                
                // Add event listeners for item actions
                const deleteItemBtn = itemElement.querySelector('.delete-item');
                const moveItemUpBtn = itemElement.querySelector('.move-item-up');
                const moveItemDownBtn = itemElement.querySelector('.move-item-down');
                
                deleteItemBtn.addEventListener('click', () => itemCard.remove());
                
                moveItemUpBtn.addEventListener('click', () => {
                    const prevSibling = itemCard.previousElementSibling;
                    if (prevSibling) {
                        itemCard.parentNode.insertBefore(itemCard, prevSibling);
                    }
                });
                
                moveItemDownBtn.addEventListener('click', () => {
                    const nextSibling = itemCard.nextElementSibling;
                    if (nextSibling) {
                        itemCard.parentNode.insertBefore(nextSibling, itemCard);
                    }
                });
                
                break;
                
            case 'passage':
                // For passages, we'll use a different template
                // This is a simplified version - you can expand this
                itemElement = document.createElement('div');
                itemElement.className = 'item-card';
                itemElement.dataset.itemId = itemId;
                itemElement.innerHTML = `
                    <div class="form-group">
                        <label>Passage Title</label>
                        <input type="text" class="form-control" placeholder="Enter passage title" required>
                    </div>
                    <div class="form-group">
                        <label>Passage Text</label>
                        <textarea class="form-control" rows="4" placeholder="Enter the reading passage" required></textarea>
                    </div>
                    <div class="form-group">
                        <label>Comprehension Question (Optional)</label>
                        <input type="text" class="form-control" placeholder="Enter a question about the passage">
                    </div>
                    <div class="form-group">
                        <label>Points</label>
                        <input type="number" class="form-control item-points" min="1" value="5" required>
                    </div>
                    <div class="item-actions">
                        <button class="btn btn-sm btn-icon delete-item" title="Delete">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
                
                // Add event listener for delete button
                const deleteBtn = itemElement.querySelector('.delete-item');
                deleteBtn.addEventListener('click', () => itemElement.remove());
                
                break;
        }
        
        // Add the item to the container
        container.appendChild(itemElement);
    }
    
    // Initialize sortable functionality for items
    function initSortable(container) {
        new Sortable(container, {
            animation: 150,
            ghostClass: 'sortable-ghost',
            handle: '.move-item',
            onEnd: function(evt) {
                // Update any necessary data after reordering
            }
        });
    }
    
    // Save the test as a draft
    async function saveAsDraft() {
        if (!validateTest(true)) {
            return;
        }
        
        try {
            const testData = getTestData();
            testData.status = 'draft';
            testData.createdAt = serverTimestamp();
            testData.updatedAt = serverTimestamp();
            
            const db = getFirestore();
            const user = getAuth().currentUser;
            
            if (!user) {
                throw new Error('User not authenticated');
            }
            
            // Add the user ID to the test data
            testData.teacherId = user.uid;
            
            // Save to Firestore
            const docRef = await addDoc(collection(db, 'tests'), testData);
            showNotification('Draft saved successfully!', 'success');
            return docRef.id;
        } catch (error) {
            console.error('Error saving draft:', error);
            showNotification('Failed to save draft: ' + error.message, 'error');
            throw error;
        }
    }
    
    // Preview the test
    function previewTest() {
        const testData = getTestData();
        
        // Here you would typically open a preview window/modal
        console.log('Previewing test:', testData);
        alert('Opening test preview...');
    }
    
    // Publish the test
    async function publishTest() {
        if (!validateTest(false)) return;
        
        try {
            const testData = getTestData();
            testData.status = 'published';
            testData.publishedAt = serverTimestamp();
            testData.updatedAt = serverTimestamp();
            
            const db = getFirestore();
            const user = getAuth().currentUser;
            
            if (!user) {
                throw new Error('User not authenticated');
            }
            
            // Add the user ID to the test data
            testData.teacherId = user.uid;
            
            let docRef;
            
            if (testData.id) {
                // Update existing test
                await updateDoc(doc(db, 'tests', testData.id), testData);
                docRef = testData.id;
            } else {
                // Create new test
                docRef = await addDoc(collection(db, 'tests'), testData);
            }
            
            showNotification('Test published successfully!', 'success');
            
            // Redirect to dashboard after a short delay
            setTimeout(() => {
                window.location.href = 'teacher-dashboard.html';
            }, 1500);
            
            return docRef.id || docRef;
        } catch (error) {
            console.error('Error publishing test:', error);
            showNotification('Failed to publish test: ' + error.message, 'error');
            throw error;
        }
    }
    
    // Get all test data as an object
    function getTestData() {
        const testData = {
            title: document.getElementById('test-title').value,
            grade: document.getElementById('test-grade').value,
            timeLimit: parseInt(document.getElementById('test-time-limit').value) || 30,
            instructions: document.getElementById('test-instructions').value,
            sections: []
        };
        
        // Get data from each section
        const sectionElements = document.querySelectorAll('.section-card');
        sectionElements.forEach((sectionEl, index) => {
            const sectionData = {
                id: sectionEl.dataset.sectionId,
                title: sectionEl.querySelector('.section-title-input').value,
                instructions: sectionEl.querySelector('.section-instructions').value,
                type: sectionEl.querySelector('.section-type').value,
                items: []
            };
            
            // Get items for this section
            const itemElements = sectionEl.querySelectorAll('.item-card');
            itemElements.forEach(itemEl => {
                if (sectionData.type === 'passage') {
                    sectionData.items.push({
                        id: itemEl.dataset.itemId,
                        title: itemEl.querySelector('input[type="text"]').value,
                        content: itemEl.querySelector('textarea').value,
                        question: itemEl.querySelectorAll('input[type="text"]')[1]?.value || '',
                        points: parseInt(itemEl.querySelector('.item-points').value) || 5
                    });
                } else {
                    sectionData.items.push({
                        id: itemEl.dataset.itemId,
                        text: itemEl.querySelector('.item-text').value,
                        points: parseInt(itemEl.querySelector('.item-points').value) || 1
                    });
                }
            });
            
            testData.sections.push(sectionData);
        });
        
        return testData;
    }
    
    // Show notification to the user
    function showNotification(message, type = 'info') {
        // Remove any existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">&times;</button>
        `;
        
        // Add close button functionality
        const closeButton = notification.querySelector('.notification-close');
        closeButton.addEventListener('click', () => {
            notification.remove();
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Trigger reflow to enable animation
        notification.offsetHeight;
        notification.classList.add('show');
    }
    
    // Validate the test before saving or publishing
    function validateTest(isDraft = false) {
        const title = document.getElementById('test-title').value.trim();
        if (!title) {
            alert('Please enter a test title');
            return false;
        }
        
        const grade = document.getElementById('test-grade').value;
        if (!grade) {
            alert('Please select a grade level');
            return false;
        }
        
        const sections = document.querySelectorAll('.section-card');
        if (sections.length === 0) {
            alert('Please add at least one section to the test');
            return false;
        }
        
        // Check each section has at least one item
        for (const section of sections) {
            const items = section.querySelectorAll('.item-card');
            if (items.length === 0) {
                alert(`Section "${section.querySelector('.section-title-input').value}" has no items. Please add at least one item or remove the section.`);
                return false;
            }
            
            // Check all required fields are filled
            const inputs = section.querySelectorAll('input[required], textarea[required]');
            for (const input of inputs) {
                if (!input.value.trim()) {
                    alert(`Please fill in all required fields in section "${section.querySelector('.section-title-input').value}"`);
                    input.focus();
                    return false;
                }
            }
        }
        
        return true;
    }
    
    // Initialize the test creator
    init();
}

// Speech Recognition Setup (for student view)
function setupSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        console.warn('Speech recognition not supported in this browser');
        return null;
    }
    
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    return recognition;
}

// Function to check pronunciation (for student view)
function checkPronunciation(spokenText, expectedText) {
    // Simple comparison - you might want to implement more sophisticated comparison
    // This is a basic implementation that can be enhanced with NLP libraries
    const cleanSpoken = spokenText.toLowerCase().replace(/[^a-z0-9\s]/g, '');
    const cleanExpected = expectedText.toLowerCase().replace(/[^a-z0-9\s]/g, '');
    
    return cleanSpoken === cleanExpected;
}
