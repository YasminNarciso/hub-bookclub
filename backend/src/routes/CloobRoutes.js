const express = require('express');
const router = express.Router();
const buscarLivros = require('../services/googleBooksService');

router.get('/clubes', async (req, res) => {
    const { categoria } = req.query;

    if (!categoria) {
        return res.status(400).json({ erro: 'Parâmetro categoria é obrigatório' });
    }

    try {
        // clubes base
        const clubes = [
            { nome: "Clube Fantasia", categoria: "fantasia" },
            { nome: "Clube Romance", categoria: "romance" },
            { nome: "Clube Terror", categoria: "terror" }
        ];

        const filtrados = clubes.filter(
            c => c.categoria.toLowerCase() === categoria.toLowerCase()
        );

        
       let livros = [];

try {
    livros = await buscarLivros(categoria);
} catch (e) {
    console.error("Erro ao buscar livros:", e.message);
    livros = [];
}

        
        const resposta = filtrados.map((clube, index) => ({
            nome: clube.nome,
            categoria: { nome: clube.categoria },

            livro: livros[index] || {
                titulo: "Livro não encontrado",
                autor: "Autor desconhecido",
                capa_url: "https://via.placeholder.com/400x600"
            },

            descricao: `Clube voltado para fãs de ${clube.categoria}`,
            plataforma: "Discord",
            total_favoritos: Math.floor(Math.random() * 100),
            link_grupo: "#"
        }));

        res.json(resposta);

    } catch (error) {
        console.error("Erro na rota /clubes:", error.message);
        res.status(500).json({ erro: 'Erro ao buscar clubes' });
    }
});

module.exports = router;