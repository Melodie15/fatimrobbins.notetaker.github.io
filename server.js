//Dependencies
var express = require("express") ;
var path = require("path");


//Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log()
app.use(express.static(path.join(__dirname, "Develop/public")));

// The below points our server to a series of "route" files.

require("./Develop/routes/api-routes")(app);
require("./Develop/routes/html-routes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
