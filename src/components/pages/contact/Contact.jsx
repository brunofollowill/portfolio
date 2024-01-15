import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };

  return (
    <div className="flex justify-center bg-gray-50 h-[400px] mt-20">
      <div className="m-auto">
        <h2 className="text-3xl font-bold text-center tracking-tight text-gray-600 sm:text-4xl">
          Contato
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-6 w-96 max-sm:w-80 flex flex-col max-w-md gap-2">
            <input
              id="nome-empresa"
              name="nome"
              type="text"
              autoComplete="nome"
              required
              value={formData.nome}
              onChange={handleChange}
              className="min-w-0 flex-auto rounded-md border-2 border-gray-300 bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Nome / Empresa"
            />

            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="min-w-0 flex-auto rounded-md border-2 border-gray-300 bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Digite seu e-mail"
            />
            <textarea
              id="text"
              name="text"
              required
              value={formData.text}
              onChange={handleChange}
              className="min-w-0 flex-auto rounded-md border-2 border-gray-300 bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6 h-20 resize-none"
              placeholder="Envie uma mensagem"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
