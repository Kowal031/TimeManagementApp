import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import auth from "./firebaseConfig";

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
