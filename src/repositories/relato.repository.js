import prisma from '../prisma-client.js';

export const relatoRepository = {
    create: async (dados) => await prisma.relato.create({ data: dados }),
    getAll: async () => await prisma.relato.findMany(),
    getById: async (id) => await prisma.relato.findUnique({ where: { id: Number.parseInt(id) } }),
    update: async (id, dadosAtualizados) => {
        try {
            return await prisma.relato.update({ where: { id: Number.parseInt(id) }, data: dadosAtualizados });
        } catch (err) {
            return null;
        }
    },
    delete: async (id) => {
        try {
            await prisma.relato.delete({ where: { id: Number.parseInt(id) } });
            return true;
        } catch (err) {
            return false;
        }
    }
};
