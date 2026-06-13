import prisma from '../prisma-client.js';

export const conexaoRepository = {
    create: async (dados) => {
        return await prisma.conexao.create({ data: dados });
    },
    getAll: async () => await prisma.conexao.findMany(),
    getById: async (id) => await prisma.conexao.findUnique({ where: { id: Number.parseInt(id) } }),
    update: async (id, dadosAtualizados) => {
        try {
            return await prisma.conexao.update({ where: { id: Number.parseInt(id) }, data: dadosAtualizados });
        } catch (err) {
            return null;
        }
    },
    delete: async (id) => {
        try {
            await prisma.conexao.delete({ where: { id: Number.parseInt(id) } });
            return true;
        } catch (err) {
            return false;
        }
    }
};
