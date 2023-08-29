import React from "react";
import moment from "moment";

export default function ProjectCard({ p }) {
  return (
    <a
      className="bg-red-900 p-2 h-fit hover:bg-red-800 hover:cursor-pointer"
      target="blank"
      href={p.url}
    >
      <h1 className="font-bold text-2xl mb-5">{p.name}</h1>
      <div className="md:p-0 p-3">
      <img className="rounded-lg md:ring-4 ring-8 ring-red-900 mb-10" src={p.image} alt="" />
      </div>
      
      <p className="mb-5">{p.description}</p>
      <p>Created at {moment(p.created_at).fromNow()}</p>
      <p>Updated at {moment(p.pushed_at).fromNow()}</p>
    </a>
  );
}
