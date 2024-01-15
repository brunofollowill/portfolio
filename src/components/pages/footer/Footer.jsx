import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className=" flex items-center justify-center w-full h-40 backdrop-blur-md  bg-gray-100 z-10">
      <div>
        <div className="flex justify-center gap-2 p-10">
          <a href="https://github.com/brunofollowill" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#222222", height: "20px" }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/bruno-silva-506b59257/"
            target="_blank"
          ></a>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#222222", height: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}
