const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');


// GET Route for a specific tip
router.get('/', (req, res) => {
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    console.log('data', JSON.parse(data));
      const filterNote = json.filter((note) => note.id === noteId);
         res.json(filterNote)
});

// PUT "api/notes" updates a note with an id equal to req.params.id
router.put('/:id', (req, res) => {
  const newNote = { ...req.body, id: v4() }
  fs.readFromFile('./db/db.json', 'utf-8', (err, data) => {
    err && res.status(500)
    const parsed = data && JSON.parse(data)
    const newArray = parsed !== [] && parsed.map(note => note.id === req.params.id ? newNote : note)
    fs.writeToFile('./db/db.json', JSON.stringify(newArray), err => {
      err && res.status(500)
      res.json(newArray)
    })
  })
});

module.exports = router;

