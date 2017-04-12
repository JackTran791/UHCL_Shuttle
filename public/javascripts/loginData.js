firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    $(".login-cover").hide();

    var dialog = document.querySelector('#loginDialog');
    /*
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    */
    dialog.close();


    var displayName = user.displayName;
    var email = user.email;
    $("#txtName").text(email);

  } else {

    $(".login-cover").show();

    // No user is signed in.
    var dialog = document.querySelector('#loginDialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();

  }
});


/* LOGIN PROCESS */

$("#loginBtn").click(
  function(){


    var email = $("#loginEmail").val();
    var password = $("#loginPassword").val();

    if(email != "" && password != ""){
      $("#loginProgress").show();
      $("#loginBtn").hide();

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        $("#loginError").show().text(error.message);
        $("#loginProgress").hide();
        $("#loginBtn").show();
      });
    }
  }
);


/* LOGOUT PROCESS */

$("#signOutBtn").click(
  function(){

    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      $("#loginProgress").hide();
      $("#loginBtn").show();
    }).catch(function(error) {
      // An error happened.
      alert(error.message);
    });

  }
);
