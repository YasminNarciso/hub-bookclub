"use client";

import { useState } from "react";

export default function CadastroPage() {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    categoria: "",
    plataforma: "WhatsApp",
    link_grupo: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function validarLink(link: string, plataforma: string) {
    if (plataforma === "WhatsApp") {
      return link.includes("chat.whatsapp.com");
    }

    if (plataforma === "Discord") {
      return link.includes("discord.gg");
    }

    return false;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const novosErros: Record<string, string> = {};

    if (!form.nome.trim()) {
      novosErros.nome = "Nome é obrigatório.";
    }

    if (!form.descricao.trim()) {
      novosErros.descricao = "Descrição é obrigatória.";
    }

    if (!form.categoria.trim()) {
      novosErros.categoria = "Categoria é obrigatória.";
    }

    if (!form.link_grupo.trim()) {
      novosErros.link_grupo = "Link é obrigatório.";
    } else if (!validarLink(form.link_grupo, form.plataforma)) {
      novosErros.link_grupo = "Link inválido para a plataforma selecionada.";
    }

    setErrors(novosErros);

    if (Object.keys(novosErros).length === 0) {
      console.log("Clube cadastrado:", form);

      setSuccess(true);

      setForm({
        nome: "",
        descricao: "",
        categoria: "",
        plataforma: "WhatsApp",
        link_grupo: "",
      });
    } else {
      setSuccess(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border">

      <h1 className="text-2xl font-bold mb-6 text-indigo-600">
        Cadastrar Novo Clube
      </h1>

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          Clube cadastrado com sucesso!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Nome */}
        <div>
          <label className="block mb-1 font-medium">
            Nome do Clube
          </label>

          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          {errors.nome && (
            <p className="text-red-500 text-sm mt-1">
              {errors.nome}
            </p>
          )}
        </div>

        {/* Descrição */}
        <div>
          <label className="block mb-1 font-medium">
            Descrição
          </label>

          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            rows={3}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          {errors.descricao && (
            <p className="text-red-500 text-sm mt-1">
              {errors.descricao}
            </p>
          )}
        </div>

        {/* Categoria */}
        <div>
          <label className="block mb-1 font-medium">
            Categoria
          </label>

          <input
            type="text"
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          {errors.categoria && (
            <p className="text-red-500 text-sm mt-1">
              {errors.categoria}
            </p>
          )}
        </div>

        {/* Plataforma */}
        <div>
          <label className="block mb-1 font-medium">
            Plataforma
          </label>

          <select
            name="plataforma"
            value={form.plataforma}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="WhatsApp">
              WhatsApp
            </option>

            <option value="Discord">
              Discord
            </option>
          </select>
        </div>

        {/* Link */}
        <div>
          <label className="block mb-1 font-medium">
            Link do Grupo
          </label>

          <input
            type="text"
            name="link_grupo"
            value={form.link_grupo}
            onChange={handleChange}
            placeholder="https://chat.whatsapp.com/..."
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          {errors.link_grupo && (
            <p className="text-red-500 text-sm mt-1">
              {errors.link_grupo}
            </p>
          )}
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Cadastrar Clube
        </button>

      </form>
    </div>
  );
}


