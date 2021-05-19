
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDJfFHkemoHhnJLuS_yUibAJqMT0vyRsCs",
  authDomain: "newagent-gqgl.firebaseapp.com",
  projectId: "newagent-gqgl",
  storageBucket: "newagent-gqgl.appspot.com",
  messagingSenderId: "71390598627",
  appId: "1:71390598627:web:b6fca49f2b5d605632bcd6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome Fellow Being " + user_name + ":D";


function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update
  (
  {
    purpose : "adding A Room Name to talk"
  }
  );

  localStorage.setItem("room_name",room_name);
  
  window.location = "kwitter_page.html";

}
 
function getData() 
{
  firebase.database().ref("/").on('value', 

function(snapshot) {document.getElementById("output").innerHTML = "";

snapshot.forEach(function(childSnapshot) {

  childKey  = childSnapshot.key;

       Room_names = childKey;

      //Start code
      console.log( "Room Name - " + Room_names);
      row = "<div class = room_name id="+Room_names+" onclick=redirectToRoomName(this.id) >#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });
    });
  }
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  window.location = "index.html";
}