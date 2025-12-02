import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import path from "path";
import router from "./routes";
import { Server } from "http";

dotenv.config();

// MULHER!!! TROCA ESSAS RUMA DE APP PARA SERVER, PQ TU NA LNHA 29, TA EXPORTANDO ALGO DE SERVER, NÃO DE APP

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// Rotas
app.use("/", router);

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}/`);
})

export default Server;