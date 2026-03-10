"use client";

import { useEffect, useState } from "react";
import { Clube } from "@/mocks/clubesMock";
import ClubeCard from "@/components/ClubeCard";

export default function Home() {
  const [clubes, setClubes] = useState<Clube[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchClubes() {
      try {
        const response = await fetch("/api/clubes");

        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }

        const data = await response.json();
        setClubes(data);
      } catch (err) {
        console.error("Erro ao buscar clubes:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchClubes();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      
      {/* Loading */}
      {loading && (
        <p className="text-center text-zinc-500 text-lg">
          Carregando clubes...
        </p>
      )}

      {/* Erro */}
      {!loading && error && (
        <p className="text-center text-red-500 text-lg">
          Ocorreu um erro ao carregar os clubes.
        </p>
      )}

      {/* Lista vazia */}
      {!loading && !error && clubes.length === 0 && (
        <p className="text-center text-zinc-500 text-lg">
          Nenhum clube encontrado.
        </p>
      )}

      {/* Grid de clubes */}
      {!loading && !error && clubes.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {clubes.map((clube) => (
            <ClubeCard key={clube.id} clube={clube} />
          ))}
        </div>
      )}
    </main>
  );
}