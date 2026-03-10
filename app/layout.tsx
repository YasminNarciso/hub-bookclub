import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import AccessibilityBar from "../components/accessibilitybar";

export const metadata: Metadata = {
  title: "Hub Literário",
  description:
    "Plataforma para descobrir, cadastrar e favoritar clubes de leitura.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 antialiased">

        <AccessibilityBar/>

        {/* Skip to content */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Pular para o conteúdo
        </a>

        <header className="bg-white shadow-sm border-b sticky top-0 z-40">
          <nav
            className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"
            aria-label="Menu principal"
          >
            <Link
              href="/"
              className="text-xl font-bold text-indigo-600 hover:opacity-80 transition"
            >
              Hub Literário
            </Link>

            <div className="flex gap-6 text-sm font-medium">
              <Link href="/">Início</Link>
              <Link href="/cadastro">Cadastrar Clube</Link>
              <Link href="/favoritos">Favoritos</Link>
            </div>
          </nav>
        </header>

        <main
          id="conteudo"
          className="flex-1 max-w-6xl mx-auto w-full px-6 py-10"
        >
          {children}
        </main>

        <footer className="border-t bg-white mt-16">
          <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-zinc-500 space-y-2">
            <p>© {new Date().getFullYear()} Hub Literário</p>
            <p>
              Projeto Integrador — Plataforma inspirada em
              <span className="font-medium"> Goodreads</span>.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}