import { conexaoRepository } from '../repositories/conexao.repository.js';

export const conexaoService = {
    createConnection: async (dados) => {
        if (!dados.usuario1Id || !dados.usuario2Id) {
            throw new Error('usuario1Id e usuario2Id são obrigatórios.');
        }
        return await conexaoRepository.create(dados);
    },
    getAllConnections: async () => await conexaoRepository.getAll(),
    getConnectionById: async (id) => {
        const c = await conexaoRepository.getById(id);
        if (!c) throw new Error('Conexão não encontrada.');
        return c;
    },
    updateConnection: async (id, dados) => {
        const updated = await conexaoRepository.update(id, dados);
        if (!updated) throw new Error('Conexão não encontrada para atualização.');
        return updated;
    },
    deleteConnection: async (id) => {
        const removed = await conexaoRepository.delete(id);
        if (!removed) throw new Error('Conexão não encontrada para deleção.');
        return removed;
    }
};
