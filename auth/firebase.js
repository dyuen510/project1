 // Your web app's Firebase configuration
  var fireBase = fireBase || firebase;
  var hasInit = false;

  var config = {
    apiKey: "AIzaSyDKdkoTwVdvMhHmfGeRBgaU2myzVruJ5eQ",
    authDomain: "todoproject-4ae26.firebaseapp.com",
    databaseURL: "https://todoproject-4ae26.firebaseio.com",
    projectId: "todoproject-4ae26",
    storageBucket: "todoproject-4ae26.appspot.com",
    messagingSenderId: "1092289165926",
    appId: "1:1092289165926:web:89fc248fa10f3ee2"
  };
  if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
  }