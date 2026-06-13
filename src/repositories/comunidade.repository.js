import prisma from '../prisma-client.js';

export const comunidadeRepository = {
    create: async (dados) => await prisma.comunidade.create({ data: dados }),
    getAll: async () => await prisma.comunidade.findMany(),
    getById: async (id) => await prisma.comunidade.findUnique({ where: { id: Number.parseInt(id) } }),
    update: async (id, dadosAtualizados) => {
        try {
            return await prisma.comunidade.update({ where: { id: Number.parseInt(id) }, data: dadosAtualizados });
        } catch (err) {
            return null;
        }
    },
    delete: async (id) => {
        try {
            await prisma.comunidade.delete({ where: { id: Number.parseInt(id) } });
            return true;
        } catch (err) {
            return false;
        }
    }
};
