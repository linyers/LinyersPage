import React from "react";
import PostsList from '../components/PostsList'

export default function BlogPage() {
  return (
    <div className="min-h-screen overflow-auto bg-bg-image bg-fixed bg-cover">
      <div className="flex md:m-5 mx-2 mb-2 mt-20 bg-red-950 flex-col">
        <h3 className="text-left p-5 my-5 text-5xl font-light">El diario de Linyers</h3>

        <div className="px-5">
          <PostsList pathName="/blog" />
        </div>
      </div>
    </div>
  );
}
