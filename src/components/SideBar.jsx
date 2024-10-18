import React, { useState } from "react";
const SideBar = ({ all ,setFiltred }) => {
  
  const marks = [...new Set(all.map((product) => product.category ))];

  const [Catalogue, setCatalogue] = useState("all");

  const handlefilter = (e) => {
    const val = e.target.textContent;
    if (marks.includes(val)) {
      setFiltred(all.filter((product) => product.category === val));
    } else {
      setFiltred(all);
    }
    setCatalogue(val);
  };
  return (
    <div className="flex-1 md:flex-none">
      <ul className=" border border-gray-300 rounded-sm ">
        <h2 className="text-lg font-bold px-6 py-1  mb-4 bg-slate-200 ">
          filtré par marque{" "}
        </h2>
        <li
          className={`${
            Catalogue.toLocaleLowerCase() === "all" ? "bg-blue-400" : ""
          } p-2 hover:bg-blue-500/80 cursor-pointer uppercase font-mono rounded-sm mt-1  transition-all ease-in-out duration-300 mx-2`}
          onClick={handlefilter}
        >
          all
        </li>
        {marks.map((mark, index) => (
          <li
            onClick={handlefilter}
            key={index}
            className={`${
              Catalogue === mark ? "bg-blue-400" : ""
            } p-2  hover:bg-blue-500/80 cursor-pointer uppercase font-mono rounded-sm mt-1 transition-all ease-in-out duration-300 mx-2`}
          >
            {mark}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
