var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyC48M6kJwSUHCGrKaeQWOIf5M7TEtBWg4k",
    authDomain: "my-own-project-661c3.firebaseapp.com",
    databaseURL: "https://my-own-project-661c3.firebaseio.com",
    projectId: "my-own-project-661c3",
    storageBucket: "my-own-project-661c3.appspot.com",
    messagingSenderId: "62789234988",
    appId: "1:62789234988:web:dc1a13890b11bb96"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}