import { relatoRepository } from '../repositories/relato.repository.js';

export const relatoService = {
    createRelato: async (dados) => {
        if (!dados.conteudo || !dados.usuarioId) throw new Error('conteudo e usuarioId são obrigatórios para relato.');
        return await relatoRepository.create(dados);
    },
    getAllRelatos: async () => await relatoRepository.getAll(),
    getRelatoById: async (id) => {
        const r = await relatoRepository.getById(id);
        if (!r) throw new Error('Relato não encontrado.');
        return r;
    },
    updateRelato: async (id, dados) => {
        const updated = await relatoRepository.update(id, dados);
        if (!updated) throw new Error('Relato não encontrado para atualização.');
        return updated;
    },
    deleteRelato: async (id) => {
        const removed = await relatoRepository.delete(id);
        if (!removed) throw new Error('Relato não encontrado para deleção.');
        return removed;
    }
};
