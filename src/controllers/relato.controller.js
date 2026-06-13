import { relatoService } from '../services/relato.service.js';
import { successResponse, errorResponse } from '../utils/response-handler.js';

export const relatoController = {
    create: async (req, res) => {
        try {
            const r = await relatoService.createRelato(req.body);
            return successResponse(res, 201, r);
        } catch (error) {
            return errorResponse(res, 400, error.message);
        }
    },
    getAll: async (req, res) => {
        try {
            const lista = await relatoService.getAllRelatos();
            return successResponse(res, 200, lista);
        } catch (error) {
            return errorResponse(res, 500, error.message);
        }
    },
    getById: async (req, res) => {
        try {
            const r = await relatoService.getRelatoById(req.params.id);
            return successResponse(res, 200, r);
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    },
    update: async (req, res) => {
        try {
            const r = await relatoService.updateRelato(req.params.id, req.body);
            return successResponse(res, 200, r);
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    },
    delete: async (req, res) => {
        try {
            await relatoService.deleteRelato(req.params.id);
            return successResponse(res, 200, null, 'Relato deletado com sucesso.');
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    }
};
