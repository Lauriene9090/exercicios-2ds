import { Router } from "express";

const router = Router();

let produtos = [
  { id: 1, nome: "Mouse", preco: 50 },
  { id: 2, nome: "Teclado", preco: 150 },
];

router.get("/", (req, res) => {
  res.json(produtos);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find((p) => p.id === id);
  res.json(produto);
});

router.post("/", (req, res) => {
  const novoProduto = req.body; // pega o objeto inteiro
  produtos.push(novoProduto);   // adiciona direto
  res.json(novoProduto);        // devolve igual
});

export default router;
