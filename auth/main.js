var mainApp = {}; //prevent user directly to the html
(function(){
var mainContainer = document.querySelector("main_container");

    var logtout =  function(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("login.html");
        },function(){})
    }

var currentUser;

var init = function(){

  //fron on AuthStateChance and copy 
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          currentUser = user.uid;
          console.log(currentUser);
          window.localStorage.setItem('UID', currentUser);
          // User is signed in.
          console.log("stay");
          mainContainer.style.display = "";
        } else {
          currentUser = 'Error'
          console.log(currentUser);
          window.localStorage.setItem('UID', currentUser);
          // No user is signed in.
          mainContainer.style.display = "none";
          console.log("redirect");
          //redirect to login page
          window.location.replace("login.html");
        }
      });
}

console.log(firebase.auth());

var ref=firebase.auth();
ref.onAuthStateChanged(function(authData) {
if (authData) {
  console.log("User " + authData.uid + " is logged in ");
} else {
  console.log("User is logged out");
}
});


init();

mainApp.logout = logtout;
})();

