import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-image bg-fixed bg-cover">
      <div
        id="top"
        className="h-screen flex text-slate-50 flex-col gap-10 text-center items-center justify-center"
      >
        <h1 className="text-9xl font-light">Linyers</h1>
        <h2 className="text-5xl font-light">Ariel Ignacio Jimenez</h2>
        <a
          className="text-5xl mt-10 transition duration-300 ease-in-out hover:animate-bounce text-white"
          href="#about"
        >
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </a>
      </div>

      <div
        id="about"
        className="flex-grow flex md:gap-20 gap-10 flex-col justify-center items-center md:p-48 p-10 h-screen bg-red-950"
      >
        <div className="flex gap-10 items-center md:flex-row flex-col">
          <div>
            <img
              className="md:w-96 w-48 rounded-full"
              src="/profilepic.jpg"
              alt=""
            />
          </div>
          <div className="gap-10 flex flex-col">
            <h3 className="text-3xl md:text-left text-center">¡Bienvenido!</h3>
            <div className="gap-4 flex md:text-left text-center flex-col">
              <p>
                Mi nombre es Ignacio. Soy programador fullstack, utilizo Django con Python y React con JavaScript. Para
                cualquier consulta puede contactarme por los medios que ve
                debajo.
              </p>
              <p>Desde ya, ¡muchas gracias por visitar el sitio!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-14 text-center">
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
  );
}
