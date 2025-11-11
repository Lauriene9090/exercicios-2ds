import express from "express";
import helmet from "helmet";
import path from "path";
import router from "./routes";

const server = express();

// Middlewares
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
server.use(express.static(path.join(__dirname, "../public")));

// Rotas
server.use("/", router);

const PORT = process.env.PORT || 3000;

const app = server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});

// Exportar para testes automatizados
export default app;
