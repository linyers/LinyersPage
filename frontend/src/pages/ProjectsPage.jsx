import React from "react";
import ProjectList from "../components/ProjectList";

export default function ProyectsPage() {
  return (
    <div className="min-h-screen bg-bg-image bg-fixed bg-cover">
      <div className="flex flex-col gap-36 items-center justify-center">
        <h3 className="text-center mt-16 text-9xl font-light">
          Projects
        </h3>
        <p className="md:text-3xl text-2xl md:px-0 px-3 text-center text-red-300">Si quiere consultar un proyecto haga click en la carta y lo llevara al repositorio de GitHub</p>

        <div className="p-5 flex justify-center items-center">
          <ProjectList pathName='/projects' />
        </div>
      </div>
    </div>
  );
}
