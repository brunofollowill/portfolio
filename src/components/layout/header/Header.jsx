import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const menu = ["Inicio", "Sobre", "Projetos", "Contato"];

export default function Header() {
  return (
    <div>
      <div className="fixed left-0 top-0 w-full backdrop-blur-md drop-shadow-md bg-white/30 z-10">
        <div className="flex gap-6 items-center ">
          <h1 className="text-sky-500 text-2xl font-black ml-3 p-4">B</h1>
          <div className="flex gap-6 ">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#222222", height: "20px" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#222222", height: "20px" }}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#222222", height: "20px" }}
            />
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 h-full bg-gray-100 p-0 z-0">
        <div className="flex flex-col text-lg gap-16 mt-24">
          {menu.map((item, index) => (
            <div
              key={index}
              className="relative h-full text-gray-500 hover:text-black cursor-pointer transform font-light -rotate-90 origin-center text-center transition-colors group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity p-8 border-b-4 focus:outline-none rounded border-sky-500 m-auto"></div>
              <span className="relative z-10">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
