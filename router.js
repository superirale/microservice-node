import express from 'express';
import {person_create, person_get, person_list, person_delete, person_update } from './controllers/PersonController';
const router = express.Router();

router.get('/person', person_list );
router.get('/person/:id', person_get );
router.put('/person/:id', person_update );
router.delete('/person/:id', person_delete );
router.post('/person/create', person_create );

export default router;