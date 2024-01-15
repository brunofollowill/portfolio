import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div>
      <div className="fixed left-0 top-0 w-full backdrop-blur-md drop-shadow-md bg-white/30 z-10">
        <div className="flex gap-6 items-center ">
          <h1 className="text-sky-500 text-2xl font-black ml-3 p-4">B</h1>
          <div className="flex mt-1 gap-4 ">
            <a target="_blank" href="https://github.com/brunofollowill">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#222222", height: "20px" }}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/bruno-silva-506b59257/"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#222222", height: "20px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
