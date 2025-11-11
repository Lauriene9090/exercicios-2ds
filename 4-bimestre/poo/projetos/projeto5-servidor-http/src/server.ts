import express, { Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rota exemplo
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Servidor rodando corretamente!');
});

// Lê a variável PORT do .env (ou usa 3000 por padrão)
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
  });
}

// 👇 Exporta o app para ser usado no Jest
export default app;
