// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Enable offline persistence
db.enablePersistence()
    .catch((err) => {
        console.error("Error enabling offline persistence:", err);
    });

// Export Firebase services
export { auth, db };

// Helper function to get current user data
async function getCurrentUserData() {
    const user = auth.currentUser;
    if (!user) return null;
    
    try {
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
            return { id: user.uid, ...userDoc.data() };
        }
        return null;
    } catch (error) {
        console.error("Error getting user data:", error);
        return null;
    }
}

// Helper function to create a new user in Firestore
async function createUserProfile(user, additionalData = {}) {
    try {
        const userRef = db.collection('users').doc(user.uid);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || additionalData.displayName || '',
            photoURL: user.photoURL || '',
            role: additionalData.role || 'student',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            ...additionalData
        };
        
        await userRef.set(userData, { merge: true });
        return userData;
    } catch (error) {
        console.error("Error creating user profile:", error);
        throw error;
    }
}

// Export helper functions
export { getCurrentUserData, createUserProfile };
