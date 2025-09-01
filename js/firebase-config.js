// Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyAtOedXLBC4eigzqmBpYFciN-W5Mi2Cpmc",
    authDomain: "alpharia-c6a39.firebaseapp.com",
    projectId: "alpharia-c6a39",
    storageBucket: "alpharia-c6a39.firebasestorage.app",
    messagingSenderId: "85322759772",
    appId: "1:85322759772:web:d5c7a528fd61c9d2373099",
    measurementId: "G-KEC7MGMVE8"
};

// Export a function to initialize Firebase
export const initializeFirebase = () => {
    // Check if Firebase is already initialized
    if (!window.firebase?.apps?.length) {
        // Import and initialize Firebase
        import('https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js')
            .then(({ default: firebase }) => {
                // Initialize Firebase
                firebase.initializeApp(firebaseConfig);
                
                // Initialize other Firebase services as needed
                import('https://www.gstatic.com/firebasejs/9.0.2/firebase-auth-compat.js')
                    .then(() => {
                        firebase.auth();
                    });
                    
                import('https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore-compat.js')
                    .then(() => {
                        firebase.firestore();
                    });
            })
            .catch(error => {
                console.error('Error initializing Firebase:', error);
            });
    }
    return window.firebase;
};

// Export the Firebase instance
export const getFirebase = () => window.firebase;
