export interface Clube {
  id: number;
  nome: string;
  descricao: string;
  categoria: {
    id: number;
    nome: string;
  };
  plataforma: "WhatsApp" | "Discord";
  link_grupo: string;
  livro: {
    titulo: string;
    autor: string;
    capa_url: string;
  };
  total_favoritos: number;
}

const clubesMock: Clube[] = [
  {
    id: 1,
    nome: "Clube Fantasia Épica",
    descricao: "Discussões semanais sobre fantasia clássica e moderna.",
    categoria: { id: 1, nome: "Fantasia" },
    plataforma: "Discord",
    link_grupo: "https://discord.gg/exemplo",
    livro: {
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      capa_url: "https://picsum.photos/400/600?random=1",
    },
    total_favoritos: 150,
  },
  {
    id: 2,
    nome: "Clube Romance Contemporâneo",
    descricao: "Leituras mensais de romances atuais.",
    categoria: { id: 2, nome: "Romance" },
    plataforma: "WhatsApp",
    link_grupo: "https://chat.whatsapp.com/exemplo",
    livro: {
      titulo: "É Assim Que Acaba",
      autor: "Colleen Hoover",
      capa_url: "https://picsum.photos/400/600?random=2",
    },
    total_favoritos: 80,
  },
  {
    id: 3,
    nome: "Clube Ficção Científica",
    descricao: "Explorando futuros distópicos e tecnologia.",
    categoria: { id: 3, nome: "Ficção Científica" },
    plataforma: "Discord",
    link_grupo: "https://discord.gg/exemplo2",
    livro: {
      titulo: "Duna",
      autor: "Frank Herbert",
      capa_url: "https://picsum.photos/400/600?random=3",
    },
    total_favoritos: 220,
  },
];

export default clubesMock;