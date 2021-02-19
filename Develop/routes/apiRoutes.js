const notedb = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

module.exports = app => {
    fs.readFile("../db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        app.get("/api/notes", function(req, res) {
            res.json(notes);
        });

        app.post("/api/notes", function(req, res) {
            const noteID = uuidv4();
            let newNote = {
                id: noteID,
                title: req.body.title,
                text: req.boby.text
            };
            notes.push(newNote);

            updateDB();
            return console.log(`Added new note: ${newNote.title}`);
        })

        updateDB = () => {
            fs.writeFile("..db/db.json", JSON.stringify(notes, "\t"), err => {
                if (err) throw err;
                return true;
            });
        }
    });
}