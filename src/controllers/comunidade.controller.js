import { comunidadeService } from '../services/comunidade.service.js';
import { successResponse, errorResponse } from '../utils/response-handler.js';

export const comunidadeController = {
    create: async (req, res) => {
        try {
            const c = await comunidadeService.createComunidade(req.body);
            return successResponse(res, 201, c);
        } catch (error) {
            return errorResponse(res, 400, error.message);
        }
    },
    getAll: async (req, res) => {
        try {
            const lista = await comunidadeService.getAllComunidades();
            return successResponse(res, 200, lista);
        } catch (error) {
            return errorResponse(res, 500, error.message);
        }
    },
    getById: async (req, res) => {
        try {
            const c = await comunidadeService.getComunidadeById(req.params.id);
            return successResponse(res, 200, c);
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    },
    update: async (req, res) => {
        try {
            const c = await comunidadeService.updateComunidade(req.params.id, req.body);
            return successResponse(res, 200, c);
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    },
    delete: async (req, res) => {
        try {
            await comunidadeService.deleteComunidade(req.params.id);
            return successResponse(res, 200, null, 'Comunidade deletada com sucesso.');
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    }
};
