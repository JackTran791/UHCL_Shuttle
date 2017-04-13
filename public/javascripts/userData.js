var config = {
    apiKey: "AIzaSyD-StDnfMrvKydc8KNyHT12a82zRMNn_Ws",
    authDomain: "uhclshuttle.firebaseapp.com",
    databaseURL: "https://uhclshuttle.firebaseio.com",
    storageBucket: "uhclshuttle.appspot.com",
    messagingSenderId: "642776189341"
  };
  firebase.initializeApp(config);
var db1 = firebase.database();
// var auth = firebase.auth();


var userRef = db1.ref("Users");
const uList = document.getElementById('list');

function remove(userID) {
    console.log(userID);
  userRef.child(userID).remove();
};

userRef.on('child_added', snap => {
  var dataName = snap.child('Name').val();
  var dataEmail = snap.child('Email').val();
  var dataKey = snap.key;

  console.log(dataEmail);

  const li = document.createElement('li');
  li.innerText = dataEmail;
  li.id = dataKey;
  uList.appendChild(li);
  // $("#tbody").append("<tr id="+dataKey+"><td>"+dataKey
  //                 +"</td><td>"+dataName+"</td><td>"+
  //                 dataEmail+"</td></tr>");


});
