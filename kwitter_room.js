var firebaseConfig = {
    apiKey: "AIzaSyCDs4fAJYupLqETCR2A19GVAaFDjb5QwsI",
    authDomain: "lets-chat-5233e.firebaseapp.com",
    databaseURL: "https://lets-chat-5233e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-5233e",
    storageBucket: "lets-chat-5233e.appspot.com",
    messagingSenderId: "954912555465",
    appId: "1:954912555465:web:841ba4d2e65f2a12d36818",
    measurementId: "G-YTJ9H937PH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("name").innerHTML = "Welcome " + user_name + "!"

function addRoom() {

    room_name = document.getElementById("room_name").value ;
    localStorage.setItem("room_name", room_name);

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey =
                    childSnapshot.key;
                Room_name = childKey;
                row = "<div class='room_name' id=" + Room_name + " onclick='redirectToRoomName(this.id)' > #" + Room_name + " </div><hr>";
                document.getElementById("output").innerHTML += row;
            });
        });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}