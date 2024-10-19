import React, { useState } from "react";
const SideBar = ({ all, setFiltred }) => {
  const categories = [...new Set(all.map((product) => product.category))];

  const [Catalogue, setCatalogue] = useState("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handlefilter = (e) => {
    const val = e.target.textContent;
    if (categories.includes(val)) {
      setFiltred(all.filter((product) => product.category === val));
    } else {
      setFiltred(all);
    }
    setCatalogue(val);
  };
  return (
    <aside className="w-full md:w-64 mb-8 md:mb-0">
      <button
        className="md:hidden w-full bg-blue-500 text-white py-2 px-4 rounded mb-4"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Hide Categories" : "Show Categories"}
      </button>
      <div className={`md:block ${isSidebarOpen ? "block" : "hidden"}`}>
        <h2 className="text-lg font-semibold mb-4">Filtré par marque</h2>
        <ul className="space-y-2">
          <li>
            {" "}
            <button
              onClick={handlefilter}
              className={`w-full text-left py-2 px-4 rounded ${
                Catalogue === "all"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              all
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={handlefilter}
                className={`w-full text-left py-2 px-4 rounded ${
                Catalogue.toLowerCase() === category.toLowerCase()
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
    // <div className="flex-1 md:flex-none">
    //   <ul className=" border border-gray-300 rounded-sm ">
    //     <h2 className="text-lg font-bold px-6 py-1  mb-4 bg-slate-200 ">
    //       filtré par marque{" "}
    //     </h2>
    //     <li
    //       className={`${
    //         Catalogue.toLocaleLowerCase() === "all" ? "bg-blue-400" : ""
    //       } p-2 hover:bg-blue-500/80 cursor-pointer uppercase font-mono rounded-sm mt-1  transition-all ease-in-out duration-300 mx-2`}
    //       onClick={handlefilter}
    //     >
    //       all
    //     </li>
    //     {marks.map((mark, index) => (
    //       <li
    //         onClick={handlefilter}
    //         key={index}
    //         className={`${
    //           Catalogue === mark ? "bg-blue-400" : ""
    //         } p-2  hover:bg-blue-500/80 cursor-pointer uppercase font-mono rounded-sm mt-1 transition-all ease-in-out duration-300 mx-2`}
    //       >
    //         {mark}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default SideBar;
