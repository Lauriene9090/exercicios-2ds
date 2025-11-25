import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import path from "path";
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
});

export default server
