// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyAwlxjOVEwGKsio8rI39Gv5fs_gRVtZh4g',
//   authDomain: 'training-school-9151b.firebaseapp.com',
//   projectId: 'training-school-9151b',
//   storageBucket: 'training-school-9151b.appspot.com',
//   messagingSenderId: '40468888521',
//   appId: '1:40468888521:web:270710419b3a6d5d7bc618',
//   measurementId: 'G-F2Y34M2KNC',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAcyztN_9ho8LGQqQiudluAghZMlgRusuY',
  authDomain: 'training-school-b568f.firebaseapp.com',
  projectId: 'training-school-b568f',
  storageBucket: 'training-school-b568f.appspot.com',
  messagingSenderId: '748391368528',
  appId: '1:748391368528:web:2aabd2545e55b6d8e74e55',
  measurementId: 'G-T0M0YKYNL7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { app, db };
