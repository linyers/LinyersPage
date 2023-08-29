import { useState, useEffect } from "react";
import Post from "./Post";
import { getPosts, getPost, getCategory } from "../utils/projects.api";

export default function PostsList({slug, name}) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    let loadPost = async () => {
      let data = await getPost(slug);
      setPost(data.data.results);
    }

    let loadCategory = async () => {
      let data = await getCategory(name);
      setPost(data.data.results);
    }

    let loadPosts = async () => {
      let data = await getPosts();
      setPost(data.data.results);
    };

    if (slug || name) {
      slug ? loadPost() : loadCategory(); 
    } else {
      loadPosts();
    }
  }, [slug, name]);

  return (
    <div className="">
      <div className="gap-3">
        {post?.map((p, i) => {
          return <Post key={i} p={p} slug={slug}/>;
        })}
      </div>
    </div>
  );
}
