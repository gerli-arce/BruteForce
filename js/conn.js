import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js'
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
const config = {
  apiKey: "AIzaSyAiA1FLnp0ysip4ffPI--B-X8y_BzhafMU",
  authDomain: "bruteforce-dfec5.firebaseapp.com",
  databaseURL: "https://bruteforce-dfec5-default-rtdb.firebaseio.com",
  projectId: "bruteforce-dfec5",
  storageBucket: "bruteforce-dfec5.appspot.com",
  messagingSenderId: "1091003901358",
  appId: "1:1091003901358:web:ddd901540ef9ce3d4c943f",
  measurementId: "${config.measurementId}"
}; 

const app = initializeApp(config);
console.log(app);

const db = getFirestore(app);
const dtb = getDatabase(app);



$('#btn-get-dicc').click(function () { 


  
});


$('#btn-init-atack').click(function () { 


});



