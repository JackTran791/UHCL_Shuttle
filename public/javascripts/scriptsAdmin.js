
var db = firebase.database();
var auth = firebase.auth();

var rootRef = db.ref().child("users");

rootRef.on("child_added", snap => {
  var name = snap.child("name").val();
  var email = snap.child("email").val();
  var uid = snap.key;


  $("#table_body").append("<tr><td id='un' value="+name+">"+
                   name+"</td><td id='ue'  value="+ email +">" +email +
                  "</td><td><input type='radio' class='getData' onClick='btnClick()'></input></td></tr>");
});
//onmousemove='myMoveFunction()'
//onmousemove='myMoveFunction()' onmouseout='myMoveOutFunction()'
function btnClick() {
  $(".getData").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var $textName = $row.find("#un").text(); // Find the text
      var $textEmail = $row.find("#ue").text();

      document.getElementById("myTextarea").value = $textName + " and " + $textEmail;
  });
}
