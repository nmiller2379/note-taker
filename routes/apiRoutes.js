const router = require("express").Router();
const lib = require("../db/lib")

router.get("/notes", (req, res) => {
    lib
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
    lib
        .addNotes(req.body)
        .then((note) => res.json(note))
        .catch(() => res.status(500).json(err));
});

module.exports = router;