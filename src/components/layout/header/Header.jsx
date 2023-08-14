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
      <div className="fixed left-0 top-0 w-full bg-gray-100 backdrop-blur-sm z-10">
        <div className="flex gap-6 items-center">
          <h1 className="text-sky-500 text-xl font-black ml-2 p-4">B</h1>
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
              className="text-black cursor-pointer transform font-light -rotate-90 origin-center text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
