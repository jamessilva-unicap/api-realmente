import express from 'express';
import { comunidadeController } from '../controllers/comunidade.controller.js';

const router = express.Router();

router.post('/', comunidadeController.create);
router.get('/', comunidadeController.getAll);
router.get('/:id', comunidadeController.getById);
router.put('/:id', comunidadeController.update);
router.delete('/:id', comunidadeController.delete);

export default router;
