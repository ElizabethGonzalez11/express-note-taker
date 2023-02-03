const router = require('express').Router();
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
  );
});


// POST "/api/notes" adds a note to the database
router.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

// DELETE Route for a specific tip
router.delete('/:id', (req, res) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all tips except the one with the ID provided in the URL
      const note = json.filter((id) => note.id !== noteId);

      // Save that array to the filesystem
      writeToFile('./db/db.json', note);

      // Respond to the DELETE request
      res.json(`Item ${note} has been deleted 🗑️`);
    });
});




module.exports = router;