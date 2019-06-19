var express = require("express");
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

var exphbs  = require('express-handlebars');
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// ======================ROUTES=================================


// =============================================================
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});