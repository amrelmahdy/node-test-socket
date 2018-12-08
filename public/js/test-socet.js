// connect to server
const socket = io.connect("http://localhost:4000");

// connect to server
socket.on("message", (data) => {
    alert("a new message has ben emitted")
});



