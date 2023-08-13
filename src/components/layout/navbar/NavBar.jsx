import React from "react";

const menu = ["Inicio", "Sobre", "Projetos", "Contato"];

export default function NavBar() {
  return (
    <div className="fixed left-0 top-0 h-full bg-gray-100 p-0">
      <div className="flex flex-col text-lg gap-16 mt-24">
        {menu.map((item, index) => (
          <div
            key={index}
            className="text-black cursor-pointer transform font-light -rotate-90 origin-center text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
