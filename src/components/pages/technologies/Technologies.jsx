import React from "react";
import TypescriptSvg from "../../../assets/svg/icons/TypescriptSvg";
import CssSvg from "../../../assets/svg/icons/Css-Svg";
import HtmlSvg from "../../../assets/svg/icons/HtmlSvg";
import JavascriptSvg from "../../../assets/svg/icons/JavascriptSvg";
import Node from "../../../assets/svg/icons/NodeSvg";
import Express from "../../../assets/svg/icons/ExpressSvg";
import ReactSvg from "../../../assets/svg/icons/ReactSvg";
import TailwindSvg from "../../../assets/svg/icons/TailwindSvg";

export default function Technologies() {
  const icon = "50px";
  return (
    <div className="w-[850px] m-auto mt-20 ">
      <h1 className="font-extralight text-gray-600">
        Tecnologias que eu uso...
      </h1>
      <div className="m-auto p-5 backdrop-blur-md drop-shadow-md bg-white/30 z-10 rounded-2xl shadow-slate-600">
        <div className=" flex justify-center gap-8  ">
          <HtmlSvg largura="70px" altura="70px" />
          <CssSvg largura="70px" altura="70px" />
          <JavascriptSvg largura="70px" altura="70px" />
          <TypescriptSvg largura="70px" altura="70px" />
          <Node largura="70px" altura="70px" />
          <Express largura="70px" altura="70px" />
          <ReactSvg largura="70px" altura="70px" />
          <TailwindSvg largura="70px" altura="70px" />
        </div>
      </div>
    </div>
  );
}
