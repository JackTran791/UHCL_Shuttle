
var db = firebase.database();
var auth = firebase.auth();

var rootRef = db.ref().child("users");

rootRef.on("child_added", snap => {
  var name = snap.child("name").val();
  var email = snap.child("email").val();
  var uid = snap.key;


  $("#table_body").append("<tr onmousemove='myMoveFunction()' onmouseout='myMoveOutFunction()'><td id='un' value="+name+">"+
                   name+"</td><td id='ue' value="+ email +">" +email +
                  "</td><td><button class='mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect' id="+ uid
                   +">Send</button></td><td><input type='submit' value='Submit' onclick='myMoveFunction()'/></td></tr>");
});
//onmousemove='myMoveFunction()'
