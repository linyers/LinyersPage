import React from "react";
import moment from "moment";

export default function ProjectCard({ p }) {
  console.log(p);
  return (
    <a
      className="bg-red-800 p-2 hover:bg-red-700 hover:cursor-pointer"
      target="blank"
      href={p.url}
    >
      <h1 className="font-bold text-2xl mb-5">{p.name}</h1>
      <img className="rounded-lg mb-10" src={p.image} alt="" />
      <p className="mb-5">{p.description}</p>
      <p>Created at {moment(p.created_at).fromNow()}</p>
      <p>Updated at {moment(p.updated_at).fromNow()}</p>
    </a>
  );
}
