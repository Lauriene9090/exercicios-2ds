import { Router, Request, Response } from "express";
import produtosRouter from "./produto";

const router = Router();

// Rota principal
router.get("/", (req: Request, res: Response) => {
  res.json({ nome: "Maria Lauriene Almeida Nascimento", idade: 25 });
});

// Rota /ping
router.get("/ping", (req: Request, res: Response) => {
  res.json({ pong: true });
});

// Rota /produtos
router.use("/produtos", produtosRouter);

export default router;
