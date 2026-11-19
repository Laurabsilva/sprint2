import express from "express";
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Servidor Node.js com Express funcionando!');
});


const mensagens = [
    { id: 1, usuario: "Isabela", texto: "Bom dia magnata!" },
    { id: 2, usuario: "Laura", texto: "Oii :)" },
    { id: 3, usuario: "Rafaela", texto: "Tudo bem?!" },
    { id: 4, usuario: "Heloísa", texto: "Como vai?" },
    { id: 4, usuario: "Sophia", texto: "Até logo!!" }
];

function listarMensagens() {
    return mensagens
};

app.get("/", (req, res) => {
    res.send("Servidor rodando🚀");
});

app.get('/status', (req, res) => {
    res.json({ status: 'online', sprint: 2 });
})

app.get("/sobre", (req, res) => {
    res.send("Projeto Mensageiro Local");
});

app.get('/mensagens', (req, res) => {
    res.json(listarMensagens());
});

app.get('/mensagens:id/', (req, res) => {
    const mensagem = mensagens.find(m.id === Number(req.params.id));
    if (!mensagem) return res.status(404).json({ erro: "Não encontrada" });
    res.json(mensagem);
});

app.get("/total-mensagens", (req, res) =>
    res.json({ total: mensagens.length }));

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor em http://localhost:${PORT}`)
});
