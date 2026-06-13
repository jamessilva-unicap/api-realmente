import express from 'express';
import { relatoController } from '../controllers/relato.controller.js';

const router = express.Router();

router.post('/', relatoController.create);
router.get('/', relatoController.getAll);
router.get('/:id', relatoController.getById);
router.put('/:id', relatoController.update);
router.delete('/:id', relatoController.delete);

export default router;
