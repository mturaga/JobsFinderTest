var express = require("express");
var app = express();

app.set("views", __dirname)
//app.set("view engine", "html");

app.use(express.static(__dirname + "/public"))

app.get("*", function(req, res){
    res.render("index.html");
});

app.listen(process.env.PORT, process.env.IP);