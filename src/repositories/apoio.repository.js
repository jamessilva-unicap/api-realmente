import prisma from '../prisma-client.js';

export const apoioRepository = {
    create: async (dados) => await prisma.apoio.create({ data: dados }),
    getAll: async () => await prisma.apoio.findMany(),
    getById: async (id) => await prisma.apoio.findUnique({ where: { id: Number.parseInt(id) } }),
    update: async (id, dadosAtualizados) => {
        try {
            return await prisma.apoio.update({ where: { id: Number.parseInt(id) }, data: dadosAtualizados });
        } catch (err) {
            return null;
        }
    },
    delete: async (id) => {
        try {
            await prisma.apoio.delete({ where: { id: Number.parseInt(id) } });
            return true;
        } catch (err) {
            return false;
        }
    }
};
