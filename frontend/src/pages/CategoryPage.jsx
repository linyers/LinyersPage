import {useEffect} from 'react'
import PostsList from "../components/PostsList";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const params = useParams();

  return (
    <div className="min-h-screen overflow-auto bg-bg-image bg-fixed bg-cover">
      <div className="flex md:m-5 mx-2 mb-2 mt-20 bg-red-950 flex-col">
        <h3 className="text-left p-5 my-5 text-5xl font-light">
          El diario de Linyers
        </h3>
        <h4 className="text-left px-5 mt-10 text-5xl font-light">Categoria: {params.name}</h4>

        <div className="px-5">
          <PostsList name={params.name} pathName={`/blog/category/${params.name}`} />
        </div>
      </div>
    </div>
  );
}
