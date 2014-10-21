var express = require("express");
var app = express();

app.set("views", __dirname)
//app.engine('html', require('ejs').renderFile);
app.set("view engine", "jade");

app.use(express.static(__dirname + "/public"))

app.get("*", function(req, res){
    res.render("index.jade");
});

app.listen(process.env.PORT, process.env.IP);