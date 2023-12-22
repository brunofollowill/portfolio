import React from "react";
import Me from "../../../assets/img/me.png"

export default function About() {
  return (
    <div className="flex bg-gray-100 h-[250px]">
      <div className="w-3/5 m-auto">
        <h1 className="font-black text-4xl border-b-2 text-slate-600 border-slate-200 w-[250px] mt-5">
          Sobre
        </h1>
        <div className="flex mt-10">
          <img className="w-[146px] h-[146px]" src={Me}/>
          <p className=" text-slate-600">
            Nascido e criado no Rio de Janeiro, há pouco mais de 1 ano embarquei
            no estudo do mundo da tecnologia. Sua constante evolução e
            possibilidades têm me cativado de forma crescente. Estou animado
            para continuar aprendendo e explorando tudo o que esse universo tem
            a oferecer.
          </p>
        </div>
      </div>
    </div>
  );
}
