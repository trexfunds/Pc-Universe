// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxtgOaa9aSOFx8KGntpXG0jFxNY8jQSv4",
  authDomain: "pc-universe-63740.firebaseapp.com",
  projectId: "pc-universe-63740",
  storageBucket: "pc-universe-63740.appspot.com",
  messagingSenderId: "858954923818",
  appId: "1:858954923818:web:18f5fe2390873294aba853",
  measurementId: "G-K5L3EV0X6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;