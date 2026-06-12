// src/services/usuarioService.js
import { usuarioRepository } from '../repositories/user.repository.js';

export const usuarioService = {
    createUser: (dados) => {
        if (!dados.nome || !dados.idade) {
            throw new Error("Nome e idade são obrigatórios para o RealMente.");
        }
        return usuarioRepository.create(dados);
    },
    getAllUsers: () => {
        return usuarioRepository.getAll();
    },
    getUserById: (id) => {
        const usuario = usuarioRepository.getById(id);
        if (!usuario) throw new Error("Usuário não encontrado.");
        return usuario;
    },
    updateUser: (id, dados) => {
        const usuarioAtualizado = usuarioRepository.update(id, dados);
        if (!usuarioAtualizado) throw new Error("Usuário não encontrado para atualização.");
        return usuarioAtualizado;
    },
    deleteUser: (id) => {
        const deletado = usuarioRepository.delete(id);
        if (!deletado) throw new Error("Usuário não encontrado para deleção.");
        return deletado;
    }
};