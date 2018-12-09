// connect to server
const socket = io.connect("http://localhost:4000");
//const socket = io.connect("http://104.248.241.93:4000");

// connect to server
socket.on("message", (data) => {
    alert("a new message has ben emitted")
});



