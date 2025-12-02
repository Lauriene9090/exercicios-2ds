import { Router } from "express";

const router = Router();

<<<<<<< HEAD
interface Produto {
  id: number;
  nome: string;
  preco: number;
}

let produtos: Produto[] = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse Gamer", preco: 150 },
  { id: 3, nome: "Teclado Mecânico", preco: 250 },
];

// GET / → lista todos os produtos
=======
let produtos = [
  { id: 1, nome: "Mouse", preco: 50 },
  { id: 2, nome: "Teclado", preco: 150 },
];

>>>>>>> origin/main
router.get("/", (req, res) => {
  res.json(produtos);
});

<<<<<<< HEAD
// GET /:id → retorna um produto específico
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ erro: "Produto não encontrado" });
  }
});

// POST / → cadastra um novo produto
router.post("/", (req, res) => {
  const { nome, preco } = req.body;

  if (!nome || !preco) {
    return res.status(400).json({ erro: "Nome e preço são obrigatórios" });
  }

  const novoProduto: Produto = {
    id: produtos.length + 1,
    nome,
    preco,
  };

  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
=======
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find((p) => p.id === id);
  res.json(produto);
});

router.post("/", (req, res) => {
  const novoProduto = req.body; // pega o objeto inteiro
  produtos.push(novoProduto);   // adiciona direto
  res.json(novoProduto);        // devolve igual
>>>>>>> origin/main
});

export default router;
