import React from "react";

export default function Rectangle(props) {
  return (
    <div>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div className="w-[300px] h-[140px] mt-10 m-auto backdrop-blur-md drop-shadow-md bg-white/30 z-10 rounded-2xl shadow-slate-600">
          {/* Conteúdo do Projeto */}
          <img
            src={props.src}
            alt={props.alt}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </a>
    </div>
  );
}
