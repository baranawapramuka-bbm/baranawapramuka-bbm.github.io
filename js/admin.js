import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { auth } from "./firebase.js";

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginMessage = document.getElementById("loginMessage");

const loginBox = document.getElementById("loginBox");
const adminPanel = document.getElementById("adminPanel");
const logoutButton = document.getElementById("logoutButton");

loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  loginMessage.textContent = "Sedang masuk...";

  try {
    await signInWithEmailAndPassword(auth, email, password);

    loginMessage.textContent = "Login berhasil.";
  } catch (error) {
    console.error(error);

    if (error.code === "auth/invalid-credential") {
      loginMessage.textContent = "Email atau password salah.";
    } else {
      loginMessage.textContent = "Login gagal. Silakan coba lagi.";
    }
  }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    loginBox.style.display = "none";
    adminPanel.style.display = "block";
  } else {
    loginBox.style.display = "block";
    adminPanel.style.display = "none";
  }
});

logoutButton?.addEventListener("click", async () => {
  await signOut(auth);
});