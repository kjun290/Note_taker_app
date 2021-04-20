const router = require('express').Router();
const path = require('path');
const { read } = require('../db/store');
const store = require('../db/store');

router.get('/notes', (req, res) => {
    

store.getNotes().then((notes) => {
    return res.json(notes)
}).catch((err) => res.status(500).JSON(err))

})

router.post('/api/notes', (req, res) => {
    let newNote = req.body;
    notes.push(newNote);
})

router.delete('/api/notes/:id', (req, res) => {
    notes.splice(req.params.id, 1);
});

module.exports = router;