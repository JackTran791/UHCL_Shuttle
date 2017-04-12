var db = firebase.database();
var userRef = db.ref("Users");

function remove(userID) {
    console.log(userID);
  userRef.child(userID).remove();
};

userRef.on('child_added', snap => {
  var dataName = snap.child('Name').val();
  var dataEmail = snap.child('Email').val();
  var dataKey = snap.key;

  $("#tbody").append("<tr id="+dataKey+"><td>"+dataKey
                  +"</td><td>"+dataName+"</td><td>"+
                  dataEmail+"</td></tr>");
});

userRef.on('child_changed', snap => {
  // //const tbodyChanged = document.getElementById(snap.key);
  // var dataKey = snap.key;
  // // snap = snap.child(dataKey);
  // var dataName = snap.child(dataKey).child('Name').val();
  // var dataEmail = snap.child('Email').val();

  // $("#tbody").append("<tr id="+dataKey+"><td>"+dataKey
  //                 +"</td><td>"+dataName+"</td><td>"+
  //                 dataEmail+"</td></tr>");
});

userRef.on('child_removed', snap => {
  //const tbodyChanged = document.getElementById(snap.key);
  // userRef.child(dataKey).remove();

  // $("#tbody").append("<tr id="+dataKey+"><td>"+dataKey
  //                 +"</td><td>"+dataName+"</td><td>"+
  //                 dataEmail+"</td></tr>");
});


// const messaging = firebase.messaging();
// messaging.requestPermission()
// .then(function () {
//   console.log("Have Permission");
//   return messaging.getToken();
// })
// .then(function (token) {
//   console.log(token);
// })
// .catch(function(err) {
//   console.log("Error Occured");
// });
//
//
// messaging.onMessage(function(payload) {
//   console.log('onMessage: ', payload);
// });
