import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";

import { auth } from "./firebase";

// ---------- EMAIL SIGNUP ----------
export async function signupWithEmail(email: string, password: string) {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res.user;
}

// ---------- EMAIL SIGNIN ----------
export async function signinWithEmail(email: string, password: string) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user;
}

// ---------- GOOGLE SIGNIN ----------
const googleProvider = new GoogleAuthProvider();

export async function signinWithGoogle() {
  const res = await signInWithPopup(auth, googleProvider);
  return res.user;
}

// ---------- LOGOUT ----------
export async function logout() {
  await signOut(auth);
}
