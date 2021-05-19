import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6-PFYMu8pInsCzyeB-PvhRQL5HeB-Bd4",
  authDomain: "live-todo-list-96b2e.firebaseapp.com",
  projectId: "live-todo-list-96b2e",
  storageBucket: "live-todo-list-96b2e.appspot.com",
  messagingSenderId: "677416939611",
  appId: "1:677416939611:web:71a2bf2775b75e1b2dcf7e",
  measurementId: "G-VVYBX98YN0"
};

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).then(() => {});
};
export const signOut = () => {
  auth.signOut().then(() => {});
}

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};