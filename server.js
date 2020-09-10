//Dependencies
var express = require("express") ;
var path = require("path");
var fs = require("fs");


//Sets up the Express App
var app = express();
var PORT = process.env.PORT || 7500;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "Develop/public")));

// The below points our server to a series of "route" files.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Notes (DATA)
var noteInfo = [];

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.
app.get("/api/notes", function(req, res) {
try {

}


// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
app.post("/api/notes", function(req, res) {
try {
    
}

// DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
app.delete("/api/notes", function(req, res) {
    try {
    
    }



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

