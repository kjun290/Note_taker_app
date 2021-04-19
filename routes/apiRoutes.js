const router = require('express').Router();
const path = require('path');
const store = require('../db/store');

router.get('/notes', (req, res) => {
    // Class Store
  
})

store.getNotes().then((notes) => {
    return res.json(notes)
})

 

modeule.exports = router;