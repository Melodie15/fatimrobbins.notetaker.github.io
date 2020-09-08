//Dependencies
var express = require("express") ;
var path = require("path");
var fs = require("fs");


//Sets up the Express App
var app = express();
var PORT = 7500;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "Develop/public")));

//Notes (DATA)
var noteInfo = [];

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

