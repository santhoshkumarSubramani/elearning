var firebaseConfig = {
    apiKey: "AIzaSyAG-aYqWQywgVRgp91gm3zzIDH6DVKgfP8",
    authDomain: "login-e1f98.firebaseapp.com",
    databaseURL: "https://login-e1f98.firebaseio.com",
    projectId: "login-e1f98",
    storageBucket: "login-e1f98.appspot.com",
    messagingSenderId: "923194850735",
    appId: "1:923194850735:web:1faf6eb9335b9167f2c35a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()

  function signup(){
    var email= documaent.getElementById("email");
    var password= documaent.getElementById("password");

    const promise=auth.createUserwithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("signedIn");

  }