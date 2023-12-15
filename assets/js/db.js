const firebaseConfig = {
   apiKey: "AIzaSyCs79LdKF3gOCcCljR_v4UHnSCVF2X2Mp8",
   authDomain: "photography-c5403.firebaseapp.com",
   projectId: "photography-c5403",
   storageBucket: "photography-c5403.appspot.com",
   messagingSenderId: "369079839127",
   appId: "1:369079839127:web:90e09fa2225e3aa4d8fcd2",
   measurementId: "G-G8229WT37C"
};

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Check if itemsContainer exists
const itemsContainerAnimals = document.getElementById('items-container-animals');
const itemsContainerMotorcycle = document.getElementById('items-container-motorcycle');
const itemsContainerScenery = document.getElementById('items-container-scenery');

// Get a reference to the "items" collection
const itemsCollectionAnimals = collection(db, 'imgs-animals');
const itemsCollectionMotorcycle = collection(db, 'imgs-motorcycle');
const itemsCollectionScenery = collection(db, 'imgs-scenery');

// Retrieve multiple items from Firestore
getDocs(itemsCollectionAnimals).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();

      // Display each item in HTML
      const itemElement = document.createElement('div');
      itemElement.setAttribute('class', 'col-md-6 col-lg-12');
      itemElement.innerHTML = `<img src="${data.img}" alt="">`;
      itemsContainerAnimals.appendChild(itemElement);
    });
 }).catch((error) => {
    console.error('Error getting documents:', error);
 });

// Retrieve multiple items from Firestore
getDocs(itemsCollectionMotorcycle).then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
     const data = doc.data();

     // Display each item in HTML
     const itemElement = document.createElement('div');
     itemElement.setAttribute('class', 'col-md-6 col-lg-12');
     itemElement.innerHTML = `<img src="${data.img}" alt="">`;
     itemsContainerMotorcycle.appendChild(itemElement);
   });
}).catch((error) => {
   console.error('Error getting documents:', error);
});

// Retrieve multiple items from Firestore
getDocs(itemsCollectionScenery).then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
     const data = doc.data();

     // Display each item in HTML
     const itemElement = document.createElement('div');
     itemElement.setAttribute('class', 'col-md-6 col-lg-12');
     itemElement.innerHTML = `<img src="${data.img}" alt="">`;
     itemsContainerScenery.appendChild(itemElement);
   });
}).catch((error) => {
   console.error('Error getting documents:', error);
});
