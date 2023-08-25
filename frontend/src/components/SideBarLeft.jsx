import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SideBarLeft() {
  return (
    <div className="bg-red-900 fixed flex flex-col items-center text-center justify-evenly gap-32 w-1/6 h-full">
      <div className="gap-10 flex flex-col">
        <div>
          <a href="/#top">
            <img
              className="rounded-full w-36"
              src="/public/profilepic.jpg"
              alt=""
            />
          </a>
        </div>
        <ul className="gap-6 text-xs flex flex-col">
          <li>
            <a href="/#about">ABOUT</a>
          </li>
          <li>
            <Link to="/projects">PROYECTS</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/guitar">GUITAR</Link>
          </li>
        </ul>
      </div>
      <div className="flex text-xs gap-8">
        <a target="blank" href="https://www.instagram.com/linyers_/">
          <FontAwesomeIcon size="2x" icon={faInstagram} />
        </a>
        <a target="blank" href="https://github.com/linyers">
          <FontAwesomeIcon size="2x" icon={faGithub} />
        </a>
        <a target="blank" href="mailto:linyers666@gmail.com">
          <FontAwesomeIcon size="2x" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}
