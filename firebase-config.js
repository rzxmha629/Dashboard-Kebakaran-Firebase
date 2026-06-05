// Firebase Config Dashboard Kebakaran

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKSaWzLMPHrUWw9L7TBq02Nc2-u-Yn69M",
  authDomain: "dashboard-kebakaran-4eea8.firebaseapp.com",
  projectId: "dashboard-kebakaran-4eea8",
  storageBucket: "dashboard-kebakaran-4eea8.firebasestorage.app",
  messagingSenderId: "177619175214",
  appId: "1:177619175214:web:9a2661f08499e1c5e79cbf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
