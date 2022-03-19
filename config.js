import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDVBBwv7Fi7-H1PcY8iUIdQub184Uv2zbM",
  authDomain: "complaint-forum-eb725.firebaseapp.com",
  projectId: "complaint-forum-eb725",
  storageBucket: "complaint-forum-eb725.appspot.com",
  messagingSenderId: "469416742052",
  appId: "1:469416742052:web:5e43b3fb6e548c9c1caa31"
  
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

