"use client";

import { useState, useEffect } from "react";

export default function accessibilitybar() {
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState(false);

  // aplica tamanho da fonte
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // aplica modo contraste
  useEffect(() => {
    if (contrast) {
      document.body.classList.add("contrast-mode");
    } else {
      document.body.classList.remove("contrast-mode");
    }
  }, [contrast]);

  function increaseFont() {
    setFontSize((prev) => prev + 2);
  }

  function decreaseFont() {
    setFontSize((prev) => (prev > 12 ? prev - 2 : prev));
  }

  function toggleContrast() {
    setContrast((prev) => !prev);
  }

  return (
    <div
      className="w-full bg-gray-100 border-b flex justify-end gap-2 px-4 py-2 text-sm"
      role="region"
      aria-label="Barra de acessibilidade"
    >
      <button
        onClick={decreaseFont}
        className="px-3 py-1 border rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Diminuir tamanho da fonte"
      >
        A-
      </button>

      <button
        onClick={increaseFont}
        className="px-3 py-1 border rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Aumentar tamanho da fonte"
      >
        A+
      </button>

      <button
        onClick={toggleContrast}
        className="px-3 py-1 border rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-pressed={contrast}
        aria-label="Ativar ou desativar alto contraste"
      >
        Alto Contraste
      </button>
    </div>
  );
}