import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjects } from "../../utils/projects.api";
import ProjectCard from "./ProjectCard";
import PaginationFooter from "../parts/PaginationFooter";
import Loader from "../parts/Loader";

export default function ProjectList({ pathName }) {
  const [project, setProject] = useState([]);
  const [page, setpage] = useState({});
  const [load, setLoad] = useState(true);

  const params = useParams();

  useEffect(() => {
    let loadProjects = async () => {
      let data = await getProjects(params.p);
      setpage({
        pathName,
        actual: params.p ? params.p : 1,
        next: data.data.links.next,
        previous: data.data.links.previous,
        last_page: data.data.total_pages,
      });
      setLoad(false);
      setProject(data.data.results);
    };
    loadProjects();
  }, [params.p]);

  return (
    <div>
      {load ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {project?.map((p, i) => {
              return <ProjectCard key={i} p={p} />;
            })}
          </div>
          <div className="border-b-4 border-red-950 mt-5 bg-red-900">
            <PaginationFooter page={page} />
          </div>
        </>
      )}
    </div>
  );
}
