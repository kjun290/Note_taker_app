const router = require('express').Router();
const path = require('path');
const store = require('../db/store');

router.get('/notes', (req, res) => {
  


store.getNotes().then((notes) => {
    return res.json(notes)
}).catch((err) => res.status(500).JSON(err))

})

module.exports = router;