import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="fixed w-full bg-gray-200 backdrop-blur-sm">
      <div className="flex gap-6 items-center">
        <h1 className="text-sky-500 text-xl font-black ml-2 p-5">W</h1>
        <div className="flex gap-6">
          <FontAwesomeIcon icon={faGithub} style={{ color: "#222222" }} />
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#222222" }} />
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#222222" }} />
        </div>
      </div>
    </div>
  );
}
