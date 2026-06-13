import express from 'express';
import { apoioController } from '../controllers/apoio.controller.js';

const router = express.Router();

router.post('/', apoioController.create);
router.get('/', apoioController.getAll);
router.get('/:id', apoioController.getById);
router.put('/:id', apoioController.update);
router.delete('/:id', apoioController.delete);

export default router;
