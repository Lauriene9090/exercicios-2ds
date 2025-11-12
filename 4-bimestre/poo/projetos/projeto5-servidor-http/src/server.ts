import http from "http";


// Carrega as variáveis do arquivo .env

// Lê a porta do .env ou usa 3000 como padrão
const PORT = process.env.PORT || 3000;

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  // Mensagem personalizada
  const nome = "Maria Lauriene";
  const idade = 23;

  res.end(`<h1>Olá! Meu nome é ${nome} e tenho ${idade} anos.</h1>`);
});

// Inicia o servidor
server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}/`);
});
