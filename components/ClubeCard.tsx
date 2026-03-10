"use client";

import Image from "next/image";
import { Clube } from "@/mocks/clubesMock";

interface ClubeCardProps {
  clube: Clube;
}

export default function ClubeCard({ clube }: ClubeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border overflow-hidden 
                    hover:shadow-xl hover:-translate-y-1 
                    transition-all duration-300 
                    flex flex-col h-full">
      
      {/* Capa */}
      <div className="w-full h-60 bg-zinc-100">
        <Image
          src={clube.livro.capa_url}
          alt={`Capa do livro ${clube.livro.titulo}`}
          width={400}
          height={600}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-1">
        
        {/* Título */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg text-zinc-800">
            {clube.nome}
          </h2>
          <p className="text-sm text-zinc-500">
            {clube.categoria.nome}
          </p>
        </div>

        {/* Livro */}
        <div className="text-sm text-zinc-600 mb-3">
          <p className="font-medium">{clube.livro.titulo}</p>
          <p>{clube.livro.autor}</p>
        </div>

        {/* Descrição */}
        <p className="text-sm text-zinc-600 line-clamp-2 mb-4">
          {clube.descricao}
        </p>

        {/* Plataforma + Favoritos */}
        <div className="flex items-center justify-between w-full text-sm mb-4">
          <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-medium whitespace-nowrap">
            {clube.plataforma}
          </span>

          <div className="flex items-center gap-1 text-zinc-500 font-medium">
            <span>⭐</span>
            <span>{clube.total_favoritos}</span>
          </div>
        </div>

        {/* Espaçador automático */}
        <div className="mt-auto">
          <a
            href={clube.link_grupo}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full bg-indigo-600 text-white 
                       py-2.5 rounded-lg 
                       hover:bg-indigo-700 
                       transition-colors duration-200 
                       font-medium"
          >
            Entrar no Grupo
          </a>
        </div>

      </div>
    </div>
  );
}