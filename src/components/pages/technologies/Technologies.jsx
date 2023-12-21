import React from "react";
import TypescriptSvg from "../../../assets/svg/icons/TypescriptSvg";
import CssSvg from "../../../assets/svg/icons/Css-Svg";
import HtmlSvg from "../../../assets/svg/icons/HtmlSvg";
import JavascriptSvg from "../../../assets/svg/icons/JavascriptSvg";
import Node from "../../../assets/svg/icons/NodeSvg";
import Express from "../../../assets/svg/icons/ExpressSvg";
import ReactSvg from "../../../assets/svg/icons/ReactSvg";
import TailwindSvg from "../../../assets/svg/icons/TailwindSvg"

export default function Technologies() {
  return (
    <div className="w-3/5 m-auto mt-20 ">
      <h1 className=" font-black text-4xl border-b-2 text-slate-600 border-slate-200 w-[250px]">
        Tecnologias
      </h1>
      <div className=" w-[650px] mt-10 m-auto p-5 backdrop-blur-md drop-shadow-md bg-white/30 z-10 rounded-2xl shadow-slate-600">
        <div className=" flex justify-center gap-8  ">
          <HtmlSvg />
          <CssSvg />
          <JavascriptSvg />
          <TypescriptSvg />
          <Node />
          <Express />
          <ReactSvg />
          <TailwindSvg />
        </div>
      </div>
    </div>
  );
}
