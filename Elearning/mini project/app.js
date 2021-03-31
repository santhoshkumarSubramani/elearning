 var firebaseConfig = {
    apiKey: "AIzaSyD9-GxI1-1dA-9W3j47Os3pQv3MUmrVVPg",
    authDomain: "test-form-db613.firebaseapp.com",
    databaseURL: "https://test-form-db613.firebaseio.com",
    projectId: "test-form-db613",
    storageBucket: "test-form-db613.appspot.com",
    messagingSenderId: "509580751281",
    appId: "1:509580751281:web:45b4f36a0db64370ea0d90"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("infos");


document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();


  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}


function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
