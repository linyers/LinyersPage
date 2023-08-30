import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PaginationFooter({ page }) {
  return (
    <div className="flex flex-row justify-between text-lg">
      <div className="flex items-center">
        {page.actual === 1 ? (
          <a
            disabled
            className="cursor-default p-2 hover:bg-none hover:text-red-200"
          >
            1
          </a>
        ) : (
          <Link
            to={`${page.pathName}`}
            className="cursor-pointer p-2 hover:text-red-500"
          >
            1
          </Link>
        )}

        {page.previous && page.actual - 1 !== 1 ? (
          <>
            {page.actual !== 1 && page.actual - 2 !== 1 ? (
              <span>...</span>
            ) : null}
            <Link
              to={`${page.pathName}/page/${page.actual - 1}`}
              className="cursor-pointer p-2 hover:text-red-500"
            >
              {page.actual - 1}
            </Link>
          </>
        ) : null}
        {page.actual !== 1 && page.actual !== page.last_page ? <span className="font-medium p-2">{page.actual}</span> : null }
        {page.next && page.actual + 1 !== page.last_page ? (
          <>
            <Link
              to={`${page.pathName}/page/${page.actual + 1}`}
              className="cursor-pointer p-2 hover:text-red-500"
            >
              {page.actual + 1}
            </Link>
            {page.actual !== page.last_page &&
            page.actual + 2 !== page.last_page ? (
              <span>...</span>
            ) : null}
          </>
        ) : null}

        {page.actual === 1 && page.last_page === 1 ? null : page.actual ==
          page.last_page ? (
          <a
            disabled
            className="cursor-default p-2 hover:bg-none hover:text-red-200"
          >
            {page.last_page}
          </a>
        ) : (
          <Link
            to={`${page.pathName}/page/${page.last_page}`}
            className="cursor-pointer p-2 hover:text-red-500"
          >
            {page.last_page}
          </Link>
        )}
      </div>

      <div className="flex">
        {page.previous ? (
          page.actual - 1 == 1 ? (
            <Link
              to={`${page.pathName}`}
              className="cursor-pointer p-2 hover:bg-red-700"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          ) : (
            <Link
              to={`${page.pathName}/page/${page.actual - 1}`}
              className="cursor-pointer p-2 hover:bg-red-700"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          )
        ) : (
          <a
            disabled
            className="cursor-default p-2 hover:bg-none hover:text-red-200"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        )}
        {page.next ? (
          <Link
            to={`${page.pathName}/page/${page.actual + 1}`}
            className="cursor-pointer p-2 hover:bg-red-700"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        ) : (
          <a
            disabled
            className="cursor-default p-2 hover:bg-none hover:text-red-200"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        )}
      </div>
    </div>
  );
}
