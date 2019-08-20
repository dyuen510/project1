var mainApp = {}; //prevent user directly to the html
(function(){
var mainContainer = document.querySelector("main_container");

    var logtout =  function(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("login.html");
        },function(){})
    }

var init = function(){

  //fron on AuthStateChance and copy 
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("stay");
          mainContainer.style.display = "";
        } else {
          // No user is signed in.
          mainContainer.style.display = "none";
          console.log("redirect");
          //redirect to login page
          window.location.replace("login.html");
        }
      });
}
    
init();

mainApp.logout = logtout;
})();