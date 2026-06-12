let usuarios = [];
let idCounter = 1;

export const usuarioRepository = {
    create: (dados) => {
        const novoUsuario = { id: idCounter++, ...dados };
        usuarios.push(novoUsuario);
        return novoUsuario;
    },
    getAll: () => {
        return usuarios;
    },
    getById: (id) => {
        return usuarios.find(u => u.id === Number.parseInt(id));
    },
    update: (id, dadosAtualizados) => {
        const index = usuarios.findIndex(u => u.id === Number.parseInt(id));
        if (index === -1) return null;
        
        usuarios[index] = { ...usuarios[index], ...dadosAtualizados };
        return usuarios[index];
    },
    delete: (id) => {
        const index = usuarios.findIndex(u => u.id === Number.parseInt(id));
        if (index === -1) return false;
        
        usuarios.splice(index, 1);
        return true;
    }
};