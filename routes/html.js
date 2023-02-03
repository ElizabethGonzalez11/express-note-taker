const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');



// Import our modular routers for /notes and /delete
const notesRouter = require('./html.js');
const deleteRouter = require('./delete');


router.use('/notes', notesRouter);
router.use('/delete', deleteRouter);


module.exports = router;