import React from "react";

export default function About() {
  return (
    <div className="flex bg-gray-50 bg-opacity-70 ">
      <div className="w-3/5 max-sm:w-[350px] m-auto p-5">
        <h1 className="font-black text-4xl border-b-2 max-sm:m-auto text-slate-700 border-slate-200 w-[250px] mt-5">
          Sobre
        </h1>
        <div className="flex mt-10">
          <p className=" text-slate-700  mb-16">
            Estudante de Análise e Desenvolvimento de Sistemas na UniCesumar, a
            minha jornada nesse campo começou há pouco mais de um ano. Desde
            então, tenho me dedicado intensamente ao aprendizado e à aplicação
            prática dos conhecimentos adquiridos. <br />
            Ao longo desse período, tenho mergulhado em alguns projetos
            pessoais, nos quais estou colocando em prática os conceitos
            aprendidos em sala de aula e nos cursos online. <br />
            Cada vez que me envolvo com o código, sinto uma paixão crescente
            pela área de desenvolvimento de sistemas. Busco oportunidades para
            aprender e me manter atualizado, reconhecendo a importância
            constante do aprimoramento profissional. Estou comprometido em
            expandir meu conhecimento, explorando novas tecnologias e
            metodologias, para contribuir de maneira significativa no
            desenvolvimento de sistemas inovadores.
          </p>
        </div>
      </div>
    </div>
  );
}
