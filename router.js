const express = require('express');
const personController = require('./controllers/PersonController.js');
const router = express.Router();

router.get('/person', personController.person_list );
router.get('/person/:id', personController.person_get );
router.put('/person/:id', personController.person_update );
router.delete('/person/:id', personController.person_delete );
router.post('/person/create', personController.person_create );

module.exports = router;