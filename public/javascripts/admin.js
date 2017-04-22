
  // FIREBASE CONFIG
  var config = {
      apiKey: "AIzaSyD-StDnfMrvKydc8KNyHT12a82zRMNn_Ws",
      authDomain: "uhclshuttle.firebaseapp.com",
      databaseURL: "https://uhclshuttle.firebaseio.com",
      storageBucket: "uhclshuttle.appspot.com",
      messagingSenderId: "642776189341"
    };

  //INITIALIZE FIREBASE WEB APP
  firebase.initializeApp(config);
  var db = firebase.database();

  var usersRef = db.ref().child("users");

  // $("#table_body").append("<tr><td>Jack</td><td>congsonit@gmail.com</td></tr>");

  usersRef.on("child_added", function(snap) {
    var name = snap.child("name").val();
    var email = snap.child("email").val();
    var uid = snap.key;


    $("#table_body").append("<tr><td id='un' value="+name+">"+
                     name+"</td><td id='ue'  value="+ email +">" +email +
                    "</td><td><input type='radio' class='getData' onClick='btnClick()'></input></td></tr>");
  });

  function btnClick() {
    $(".getData").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        var $textName = $row.find("#un").text(); // Find the text
        var $textEmail = $row.find("#ue").text(); //Find the text

        document.getElementById("myTextarea").value = $textName + " and " + $textEmail;
    });
  };
