import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import auth, { googleProvider } from "./firebaseConfig";

export const registerWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider);
};

export const logout = async () => {
  return await signOut(auth);
};

export const getCurrentUser = () => {
  return new Promise<User | null>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
};
