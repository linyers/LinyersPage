import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import PaginationFooter from "../parts/PaginationFooter";
import { getPosts, getPost, getCategory } from "../../utils/projects.api";

export default function PostsList({ slug, name, pathName }) {
  const [post, setPost] = useState([]);
  const [page, setpage] = useState({});

  const params = useParams();

  function loadPages(data) {
    setpage({
      pathName,
      actual: params.p ? parseInt(params.p) : 1,
      next: data.data.links.next,
      previous: data.data.links.previous,
      last_page: data.data.total_pages,
    });
  }

  useEffect(() => {
    let loadPost = async () => {
      let data = await getPost(slug);
      setPost(data.data.results);
    };

    let loadCategory = async () => {
      let data = await getCategory(name, params.p);
      setPost(data.data.results);
      loadPages(data);
    };

    let loadPosts = async () => {
      let data = await getPosts(params.p);
      setPost(data.data.results);
      loadPages(data);
    };

    if (slug || name) {
      slug ? loadPost() : loadCategory();
    } else {
      loadPosts();
    }
  }, [slug, name, params.p]);

  return (
    <div className="">
      <div className="gap-3">
        {post?.map((p, i) => {
          return <Post key={i} p={p} slug={slug} />;
        })}
      </div>
      {slug ? null : (
        <div className="border-t-4 border-red-500 mb-5 bg-red-900">
          <PaginationFooter page={page} />
        </div>
      )}
    </div>
  );
}
