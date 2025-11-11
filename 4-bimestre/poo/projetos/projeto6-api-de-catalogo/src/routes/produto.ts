import { Router, Request, Response } from "express";

const router = Router();

// Lista fixa inicial
let produtos = [
  { id: 1, nome: "Mouse Gamer", preco: 120 },
  { id: 2, nome: "Teclado Mecânico", preco: 350 },
  { id: 3, nome: "Monitor Full HD", preco: 900 },
];

// GET / → retorna lista de produtos
router.get("/", (req: Request, res: Response) => {
  res.json(produtos);
});

// GET /:id → retorna produto específico
router.get("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find((p) => p.id === id);
  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }
  res.json(produto);
});

// POST / → adiciona novo produto
router.post("/", (req: Request, res: Response) => {
  const novoProduto = req.body;
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

export default router;
