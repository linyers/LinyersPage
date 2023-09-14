import React from "react";

function Loader() {
  return (
    <div className="flex justify-center">
      <div className="text-center mb-10">
        <img className="ml-8" src="/skullLoader2.gif" alt="" />
        <span className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text animate-pulse">
          Banca un toke
        </span>
      </div>
    </div>
  );
}

export default Loader;
