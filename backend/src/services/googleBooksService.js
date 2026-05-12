const axios = require('axios');

async function buscarLivros(query) {
    try {
        let response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5`
        );

        let items = response.data.items || []

        if (items.length === 0) {
            console.log("⚠️ Nenhum resultado, usando fallback...");

            response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=harry%20potter&maxResults=5`
            );

            items = response.data.items || [];
        }

        return items.map(item => ({
            titulo: item.volumeInfo?.title || "Sem título",
            autor: item.volumeInfo?.authors?.[0] || "Autor desconhecido",
            capa_url: item.volumeInfo?.imageLinks?.thumbnail || "https://via.placeholder.com/400x600"
        }));

    } catch (error) {
        console.error("Erro ao buscar livros:", error.message);

        return [
            {
                titulo: "Livro exemplo",
                autor: "Autor exemplo",
                capa_url: "https://via.placeholder.com/400x600"
            }
        ];
    }
}

module.exports = buscarLivros;