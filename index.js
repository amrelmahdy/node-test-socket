const path       = require("path");
const express    = require("express");
const bodyParser = require("body-parser");
const socket     = require("socket.io");
const mongoose   = require("mongoose");
const hbs = require("express-handlebars");



const app = express();
// connect to database
mongoose.connect("mongodb://46.101.151.100/socket-chat", {
    useNewUrlParser: true,
    useCreateIndex: true
});
// configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));


// handle web routes
app.use("/", require("./routes/index"));

//handle api routes
app.use("/api/messages", require("./routes/api/message"));


// configure view template
app.engine("hbs", hbs({
    defaultLayout : 'master',
    extname : "hbs",
    layoutsDir : path.join(__dirname + "/views/layouts"),
    partialsDir : path.join(__dirname + "/views/partials"),

}));

app.set("view engine", 'hbs');


// setup port
const port = process.env.PORT || 4000;
app.set("port", port);

// start server
const server = app.listen(app.get("port"), () => {
    console.log("app started on port ", port)
});
// start socket
const io = socket(server);
// handle connection event
io.on("connection", (socket) => {
    console.log("a new client connected to server", socket);
    io.sockets.emit("message", {
        'welcome': 'a new clinet added',
    });
});


