import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import path from "path";
import router from "./routes";

dotenv.config();

// MULHER!!! TROCA ESSAS RUMA DE APP PARA SERVER, PQ TU NA LNHA 29, TA EXPORTANDO ALGO DE SERVER, NÃO DE APP

const server = express();
const PORT = process.env.PORT || 3000;

// Middlewares
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

// Rotas
server.use("/", router);

// Inicializa o servidor
server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}/`);
})

export default Server;
=======
import routes from "./routes";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;

// Middlewares
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

// Rotas
server.use("/", routes);

// Inicializa o servidor
server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}/`);
}).close(() => {
  console.log("Servidor encerrado.");
});

export default server
