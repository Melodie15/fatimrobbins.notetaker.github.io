const fs = require("fs");
const util = require("util");
const writeFileSync = util.promisify(fs.writeFile);
var noteContents = require("../db/db.json");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(noteContents);
    });

    app.post("/api/notes", function(req, res) {

        let newNote = req.body;     
        
        let uniqueId = (noteContents.length).toString();
        
        console.log(uniqueId);
        newNote.id = uniqueId;
        noteContents.push(newNote);

        writeFileSync("./db/db.json", JSON.stringify(noteContents), function(err) {
            if (err) throw (err);
        });
        res.json(newNote);
    });

    app.delete("/api/notes/:id", function(req, res){
        let noteId = req.params.id;
        let newId = 0;
        console.log(`Deleting note with id ${noteId}`);
        const uId=noteContents.findIndex(x=>x.id==noteId);
        if(uId>-1){
            noteContents.splice(uId,1);
        }
        // noteContents = noteContents.filter(currentNote => {
        //     return currentNote.id != noteId;
        // });
        // for (currentNote of data) {
        //     currentNote.id = newId.toString();
        //     newId++
        // }
       
        writeFileSync("./db/db.json", JSON.stringify(noteContents), function(err) {
            if (err) throw (err);
        });
        res.json(noteContents);
    });
}