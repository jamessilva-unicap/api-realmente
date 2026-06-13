import express from 'express';
import { conexaoController } from '../controllers/conexao.controller.js';

const router = express.Router();

router.post('/', conexaoController.create);
router.get('/', conexaoController.getAll);
router.get('/:id', conexaoController.getById);
router.put('/:id', conexaoController.update);
router.delete('/:id', conexaoController.delete);

export default router;
