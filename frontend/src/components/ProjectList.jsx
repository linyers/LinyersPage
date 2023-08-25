import { useEffect, useState } from "react";
import { getProjects } from "../utils/projects.api";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    let loadProjects = async () => {
      let data = await getProjects();
      setProject(data.data.results);
    };
    loadProjects();
  }, []);

  return (
    <div className="w-screen justify-center items-center flex">
      <div className="grid grid-cols-3 gap-3">
        {project?.map((p, i) => {
          return <ProjectCard key={i} p={p} />;
        })}
      </div>
    </div>
  );
}
