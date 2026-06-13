import prisma from '../prisma-client.js';

export const usuarioRepository = {
    create: async (dados) => {
        return await prisma.usuario.create({ data: dados });
    },
    getAll: async () => {
        return await prisma.usuario.findMany();
    },
    getById: async (id) => {
        return await prisma.usuario.findUnique({ where: { id: Number.parseInt(id) } });
    },
    update: async (id, dadosAtualizados) => {
        try {
            return await prisma.usuario.update({ where: { id: Number.parseInt(id) }, data: dadosAtualizados });
        } catch (err) {
            return null;
        }
    },
    delete: async (id) => {
        try {
            await prisma.usuario.delete({ where: { id: Number.parseInt(id) } });
            return true;
        } catch (err) {
            return false;
        }
    }
};