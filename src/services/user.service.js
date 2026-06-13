// src/services/usuarioService.js
import { usuarioRepository } from '../repositories/user.repository.js';

export const usuarioService = {
    createUser: async (dados) => {
        if (!dados.nome) {
            throw new Error("Nome é obrigatório para o RealMente.");
        }
        return await usuarioRepository.create(dados);
    },
    getAllUsers: async () => {
        return await usuarioRepository.getAll();
    },
    getUserById: async (id) => {
        const usuario = await usuarioRepository.getById(id);
        if (!usuario) throw new Error("Usuário não encontrado.");
        return usuario;
    },
    updateUser: async (id, dados) => {
        const usuarioAtualizado = await usuarioRepository.update(id, dados);
        if (!usuarioAtualizado) throw new Error("Usuário não encontrado para atualização.");
        return usuarioAtualizado;
    },
    deleteUser: async (id) => {
        const deletado = await usuarioRepository.delete(id);
        if (!deletado) throw new Error("Usuário não encontrado para deleção.");
        return deletado;
    }
};