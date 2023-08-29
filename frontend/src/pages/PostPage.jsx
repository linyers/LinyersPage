import PostsList from "../components/PostsList";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const params = useParams();

  return (
    <div className="min-h-screen overflow-auto bg-bg-image bg-fixed bg-cover">
      <div className="flex md:m-5 mx-2 mb-2 mt-20 bg-red-950 flex-col">
        <h3 className="text-left p-5 my-5 text-5xl font-light">
          El diario de Linyers
        </h3>

        <div className="px-5">
          <PostsList slug={params.slug} />
        </div>
      </div>
    </div>
  );
}
