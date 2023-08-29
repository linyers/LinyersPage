import React from "react";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";
import CategoryPage from '../pages/CategoryPage'
import moment from "moment";

export default function Post({ p, slug }) {
  const body = { __html: p.body };

  const p_regex = /<p\b[^>]*>(.*?)<\/p>/;
  const match = p.body.match(p_regex);
  const description = { __html: match[0] };

  return (
    <div className="py-14 h-fit">
      {slug ? (
        <h1 className="font-bold md:text-6xl text-4xl mb-5">{p.title}</h1>
      ) : (
        <Link to={`/blog/${p.slug}`} className="flex w-0">
          <h1 className="font-bold hover:text-red-400 md:text-6xl text-4xl mb-2">
            {p.title}
          </h1>
        </Link>
      )}
      <div
        className="my-5 text-red-200 md:text-2xl text-lg"
        dangerouslySetInnerHTML={description}
      />
      {slug ? (
        <div>
          <img
            className="rounded-lg md:w-3/4 mt-5 mb-10"
            src={p.image}
            alt=""
          />
          <p className="text-center mb-5 text-xl font-bold">Comparte</p>
          <SocialLinks title={p.title} />
        </div>
      ) : p.image ? (
        <Link to={`/blog/${p.slug}`} className="flex md:w-3/4">
          <img
            className="rounded-lg hover:opacity-75 mb-10"
            src={p.image}
            alt=""
          />
        </Link>
      ) : (
        <img
          className="rounded-lg hover:opacity-75 mb-10"
          src={p.image}
          alt=""
        />
      )}

      <div className="flex flex-col-reverse md:flex-row md:gap-20 gap-10">
        <div className="flex flex-col gap-3 text-red-200/70 text-sm">
          <p>{moment(p.created_at).calendar()}</p>
          <div className="w-36">
            {p.categories.map((c, i) => {
              if (i === p.categories.length - 1) {
                return (
                  <Link key={i} className="font-normal" to={`/blog/category/${c.name}`}>
                    <span>{c.name}</span>
                  </Link>
                );
              } else {
                return (
                  <Link key={i} className="font-normal" to={`/blog/category/${c.name}`}>
                    <span>{c.name}, </span>
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div
          className="mb-5 flex flex-col gap-5 text-base"
          dangerouslySetInnerHTML={body}
        />
      </div>
    </div>
  );
}
