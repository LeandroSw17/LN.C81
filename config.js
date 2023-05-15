import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBgpk3qxADHnFhN3uIJJ-VCkDnIgXXFuoY",
  authDomain: "bikee-dcfd0.firebaseapp.com",
  projectId: "bikee-dcfd0",
  storageBucket: "bikee-dcfd0.appspot.com",
  messagingSenderId: "1052788630057",
  appId: "1:1052788630057:web:f0e3d701dc789ae7a63238"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
