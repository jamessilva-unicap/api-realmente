import express from 'express';
import { usuarioController } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/', usuarioController.create);
router.get('/', usuarioController.getAll);
router.get('/:id', usuarioController.getById);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);

export default router;