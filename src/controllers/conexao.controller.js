import { conexaoService } from '../services/conexao.service.js';
import { successResponse, errorResponse } from '../utils/response-handler.js';

export const conexaoController = {
    create: async (req, res) => {
        try {
            const c = await conexaoService.createConnection(req.body);
            return successResponse(res, 201, c);
        } catch (error) {
            return errorResponse(res, 400, error.message);
        }
    },
    getAll: async (req, res) => {
        try {
            const lista = await conexaoService.getAllConnections();
            return successResponse(res, 200, lista);
        } catch (error) {
            return errorResponse(res, 500, error.message);
        }
    },
    getById: async (req, res) => {
        try {
            const c = await conexaoService.getConnectionById(req.params.id);
            return successResponse(res, 200, c);
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    },
    update: async (req, res) => {
        try {
            const c = await conexaoService.updateConnection(req.params.id, req.body);
            return successResponse(res, 200, c);
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    },
    delete: async (req, res) => {
        try {
            await conexaoService.deleteConnection(req.params.id);
            return successResponse(res, 200, null, 'Conexão deletada com sucesso.');
        } catch (error) {
            return errorResponse(res, 404, error.message);
        }
    }
};
