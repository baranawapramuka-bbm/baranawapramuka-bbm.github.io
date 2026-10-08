import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyA8z8M6ein6CtXwxnX2FDeo-gPQEjb78Zo",
  authDomain: "ambalan-baranawa-web.firebaseapp.com",
  projectId: "ambalan-baranawa-web",
  storageBucket: "ambalan-baranawa-web.firebasestorage.app",
  messagingSenderId: "669276140639",
  appId: "1:669276140639:web:a40c02ad4bb1a9f04a97ea"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

