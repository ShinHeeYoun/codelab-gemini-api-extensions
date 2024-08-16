// throw new Error("Replace src/app/lib/firebase.config.js with your own config");

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDKhqWGTNh31cgnkX8uG0c9HAKFYrLAiuQ",
//   authDomain: "ai-extensions-codelab-e5041.firebaseapp.com",
//   projectId: "ai-extensions-codelab-e5041",
//   storageBucket: "ai-extensions-codelab-e5041.appspot.com",
//   messagingSenderId: "380537586778",
//   appId: "1:380537586778:web:b82e02f0bfc4122c60c463",
//   measurementId: "G-B6DTT7L8JT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKhqWGTNh31cgnkX8uG0c9HAKFYrLAiuQ",
  authDomain: "ai-extensions-codelab-e5041.firebaseapp.com",
  projectId: "ai-extensions-codelab-e5041",
  storageBucket: "ai-extensions-codelab-e5041.appspot.com",
  messagingSenderId: "380537586778",
  appId: "1:380537586778:web:b82e02f0bfc4122c60c463",
  measurementId: "G-B6DTT7L8JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
