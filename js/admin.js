import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { auth } from "./firebase.js";


window.login = async function () {

  const email =
    document.getElementById("username").value.trim();

  const password =
    document.getElementById("password").value;

  const error =
    document.getElementById("error");

  error.style.display = "none";

  try {

    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  } catch (err) {

    console.error(err);

    error.textContent =
      "Email atau password salah.";

    error.style.display = "block";
  }
};


window.logout = async function () {

  try {

    await signOut(auth);

  } catch (err) {

    console.error(err);

  }

};


onAuthStateChanged(auth, (user) => {

  const loginPage =
    document.getElementById("loginPage");

  const adminPanel =
    document.getElementById("adminPanel");


  if (user) {

    loginPage.style.display = "none";

    adminPanel.style.display = "block";

  } else {

    loginPage.style.display = "flex";

    adminPanel.style.display = "none";

  }

});