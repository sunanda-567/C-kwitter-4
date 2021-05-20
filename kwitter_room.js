
//ADD YOUR FIREBASE LINKS HERE

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDTb44IBXc9ZUTfptR2zvVy_BqZZWh8zhw",
  authDomain: "social-website-bbe81.firebaseapp.com",
  databaseURL: "https://social-website-bbe81-default-rtdb.firebaseio.com",
  projectId: "social-website-bbe81",
  storageBucket: "social-website-bbe81.appspot.com",
  messagingSenderId: "683499893805",
  appId: "1:683499893805:web:93a10b1f734676ff97b4a4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
  });

  localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData()
{
  firebase.database().ref("/").on('value', function(snapshot)
 
{
  document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function log_out()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}