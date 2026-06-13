import { apoioRepository } from '../repositories/apoio.repository.js';

export const apoioService = {
    createApoio: async (dados) => {
        if (!dados.relatoId || !dados.usuarioId) throw new Error('relatoId e usuarioId são obrigatórios para apoio.');
        return await apoioRepository.create(dados);
    },
    getAllApoios: async () => await apoioRepository.getAll(),
    getApoioById: async (id) => {
        const a = await apoioRepository.getById(id);
        if (!a) throw new Error('Apoio não encontrado.');
        return a;
    },
    updateApoio: async (id, dados) => {
        const updated = await apoioRepository.update(id, dados);
        if (!updated) throw new Error('Apoio não encontrado para atualização.');
        return updated;
    },
    deleteApoio: async (id) => {
        const removed = await apoioRepository.delete(id);
        if (!removed) throw new Error('Apoio não encontrado para deleção.');
        return removed;
    }
};
