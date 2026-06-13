import express from 'express';
import usuarioRoutes from './src/routes/user.routes.js';
import conexaoRoutes from './src/routes/conexao.routes.js';
import comunidadeRoutes from './src/routes/comunidade.routes.js';
import relatoRoutes from './src/routes/relato.routes.js';
import apoioRoutes from './src/routes/apoio.routes.js';

const app = express();

// Middlewares globais
app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/conexoes', conexaoRoutes);
app.use('/comunidades', comunidadeRoutes);
app.use('/relatos', relatoRoutes);
app.use('/apoios', apoioRoutes);

export default app;