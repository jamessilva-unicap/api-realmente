import express from 'express';
import usuarioRoutes from './src/routes/user.routes.js';

const app = express();

// Middlewares globais
app.use(express.json());

app.use('/usuarios', usuarioRoutes);

export default app;