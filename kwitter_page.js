//YOUR FIREBASE LINKS

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
    room_name=localStorage.getItem("room_name");

    function send()
    {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
    }

    function log_out()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

logo_name="<h4>"+ name +"<img src='tick.png' class='user_tick'></h4>";
message_logo="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id +"value="+like+"onclick='updatelike(this.id)'>";
span_logo="<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span> </button> <hr>" 
row=logo_name+message_logo+like_button+span_logo;
document.getElementById("output").innerHTML +=row;

//End code
      } });  }); }
getData();
function updatelike(message_id)
{
  console.log("clicked on like button"+message_id);
  button_id=message_id
  likes=document.getElementById(button_id).value;
  updatedlikes=Number(likes) +1;
  console.log(updatedlikes);
  firebase.database().ref(room_name).child(message_id).update({
    like:updatedlikes
  });
}
