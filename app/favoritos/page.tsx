"use client";

import ClubeCard from "@/components/ClubeCard";
import clubesMock from "@/mocks/clubesMock";

export default function FavoritosPage() {
  const favoritos = clubesMock.filter(
    (clube) => clube.total_favoritos > 100
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-indigo-600 mb-6">
        Meus Clubes Favoritos
      </h1>

      {favoritos.length === 0 ? (
        <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
          <p className="text-zinc-500">
            Você ainda não favoritou nenhum clube.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoritos.map((clube) => (
            <ClubeCard
              key={clube.id}
              clube={clube}
            />
          ))}
        </div>
      )}
    </div>
  );
}