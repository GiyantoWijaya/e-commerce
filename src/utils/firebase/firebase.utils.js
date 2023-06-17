import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmB1NHtXSHyfy9fGU8ZG4Ph53cHllvN18",
  authDomain: "e-commerce-db-55a79.firebaseapp.com",
  projectId: "e-commerce-db-55a79",
  storageBucket: "e-commerce-db-55a79.appspot.com",
  messagingSenderId: "894327835559",
  appId: "1:894327835559:web:801e685b31c6eb7303c482",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//Authentication Method from Firebase
export const auth = getAuth();
// Sign In With Google Pop Up Method
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
// Sign In With Google Redirect Method
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// create DB
export const db = getFirestore();

// create Document Users in DB Firestore
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};
// Register User With Email And Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
// Sign In User With Email And Password
export const SignInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// SIGN OUT USER
export const signOutUser = async () => signOut(auth);

// Check User status change Authenticated or not
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
