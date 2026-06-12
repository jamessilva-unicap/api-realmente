import { usuarioService } from '../services/user.service.js';

export const usuarioController = {
    create: (req, res) => {
        try {
            const usuario = usuarioService.createUser(req.body);

            return res.status(201).json(usuario);
        } catch (error) {
            return res.status(400).json({
                error: error.message
            });
        }
    },

    getAll: (req, res) => {
        try {
            const usuarios = usuarioService.getAllUsers();

            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    },
    getById: (req, res) => {
        try {
            const usuario = usuarioService.getUserById(req.params.id);
            return successResponse(res, 200, usuario);
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    },
    update: (req, res) => {
        try {
            const usuario = usuarioService.updateUser(req.params.id, req.body);
            return successResponse(res, 200, usuario);
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    },
    delete: async (req, res) => {
        try {

            usuarioService.deleteUser(req.params.id);

            return res.status(200).json({
                message: "Usuário deletado com sucesso."
            });

        } catch (error) {

            return res.status(404).json({
                error: error.message
            });

        }
    }
};