import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

export default function SideBarLeft() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="bg-red-900 fixed flex flex-col items-center text-center justify-evenly gap-32 w-1/6 h-full">
          <div className="gap-10 flex flex-col">
            <div>
              <a href="/#top">
                <img
                  className="rounded-full w-36"
                  src="/profilepic.jpg"
                  alt=""
                />
              </a>
            </div>
            <ul className="gap-6 text-xs flex flex-col">
              <li>
                <a href="/#about">ABOUT</a>
              </li>
              <li>
                <Link to="/projects">PROJECTS</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              {/* <li>
            <Link to="/guitar">GUITAR</Link>
          </li> */}
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
      </div>

      <div className="bg-red-900 py-3 z-50 lg:hidden fixed top-0 left-0 right-0 shadow-md">
        <button className="ml-4 bg-red-950 hover:border-red-700" onClick={() => setOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div
          className={`${
            !open && "hidden"
          } bg-red-500/20 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
          onClick={() => setOpen(false)}
        ></div>

        <div
          className={`${
            open ? "w-80" : "w-0"
          } bg-red-900 min-h-screen fixed top-0 left-0 transition-all duration-300`}
        >
          <div className={`${!open && "hidden"} pt-3`}>
            <button
              className="ml-4 text-white mb-14"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col justify-between items-center text-center gap-32">
              <div className="gap-10 flex flex-col">
                <div>
                  <a href="/#top">
                    <img
                      className="rounded-full w-36"
                      src="/profilepic.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <ul className="gap-6 text-xs flex flex-col">
                  <li>
                    <a href="/#about">ABOUT</a>
                  </li>
                  <li>
                    <Link to="/projects">PROJECTS</Link>
                  </li>
                  <li>
                    <Link to="/blog">BLOG</Link>
                  </li>
                  {/* <li>
            <Link to="/guitar">GUITAR</Link>
          </li> */}
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
          </div>
        </div>
      </div>
    </>
  );
}
