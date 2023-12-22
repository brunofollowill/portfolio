import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className=" w-full h-32 backdrop-blur-md  bg-gray-100 z-10">
      <div>
        <div className="flex justify-center gap-6 p-10">
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
        <p className=" text-center text-sm text-slate-500">
          Desenvolvido por Bruno Silva
        </p>
      </div>
    </div>
  );
}
