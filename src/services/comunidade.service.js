import { comunidadeRepository } from '../repositories/comunidade.repository.js';

export const comunidadeService = {
    createComunidade: async (dados) => {
        if (!dados.nome) throw new Error('Nome é obrigatório para a comunidade.');
        return await comunidadeRepository.create(dados);
    },
    getAllComunidades: async () => await comunidadeRepository.getAll(),
    getComunidadeById: async (id) => {
        const c = await comunidadeRepository.getById(id);
        if (!c) throw new Error('Comunidade não encontrada.');
        return c;
    },
    updateComunidade: async (id, dados) => {
        const updated = await comunidadeRepository.update(id, dados);
        if (!updated) throw new Error('Comunidade não encontrada para atualização.');
        return updated;
    },
    deleteComunidade: async (id) => {
        const removed = await comunidadeRepository.delete(id);
        if (!removed) throw new Error('Comunidade não encontrada para deleção.');
        return removed;
    }
};
