import { apoioService } from '../services/apoio.service.js';
import { successResponse, errorResponse } from '../utils/response-handler.js';

export const apoioController = {
    create: async (req, res) => {
        try {
            const a = await apoioService.createApoio(req.body);
            return successResponse(res, 201, a);
        } catch (error) {
            return errorResponse(res, 400, error.message);
        }
    },
    getAll: async (req, res) => {
        try {
            const lista = await apoioService.getAllApoios();
            return successResponse(res, 200, lista);
        } catch (error) {
            return errorResponse(res, 500, error.message);
        }
    },
    getById: async (req, res) => {
        try {
            const a = await apoioService.getApoioById(req.params.id);
            return successResponse(res, 200, a);
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    },
    update: async (req, res) => {
        try {
            const a = await apoioService.updateApoio(req.params.id, req.body);
            return successResponse(res, 200, a);
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    },
    delete: async (req, res) => {
        try {
            await apoioService.deleteApoio(req.params.id);
            return successResponse(res, 200, null, 'Apoio deletado com sucesso.');
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    }
};
