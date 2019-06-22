var express = require("express");
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var routes = require("./controllers/burgers_controller")

// =============================================================
var app = express();
app.use(express.static(__dirname + "/public"));

var PORT = process.env.PORT || 8080;
var exphbs  = require("express-handlebars");

var routes = require("./controllers/burgers_controller")
app.use("/", routes);

app.use(express.urlencoded({ 
    extended: false }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));
 
app.use(methodOverride("_method"));
 
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// app.use(bodyParser.json({ 
//     type: "application/*+json" }))
// app.use(bodyParser.raw({
//      type: "application/vnd.custom-type" }))
// app.use(bodyParser.text({
//      type: "text/html" }))

// ======================ROUTES=================================


// =============================================================
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});