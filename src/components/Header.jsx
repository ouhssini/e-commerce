import { useEffect, useRef } from "react";
import { FaShoppingBasket } from "react-icons/fa";

const Header = ({ setFiltred, cart, all, isshow, setIsShow }) => {
  const cartRef = useRef(null);

  const handleSearch = (e) => {
    const val = e.target.value;
    setFiltred(
      all.filter((product) =>
        product.title.toLowerCase().includes(val.toLowerCase())
      )
    );
  };

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-10 py-3 bg-slate-200 flex justify-between items-center">
      <div className="flex justify-between items-center">
        <h1 className="md:text-2xl text-base font-bold">E-SHOP</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
            className="border focus:border-gray-300 outline-none border-gray-300 px-2 py-1 rounded-sm ml-4"
          />
        </div>
      </div>
      <div className="relative" ref={cartRef}>
        <FaShoppingBasket
          className="text-2xl cursor-pointer"
          onClick={() => setIsShow(!isshow)}
        />
        <span className="bg-red-500 text-white text-xs h-4 w-4 flex items-center justify-center rounded-full absolute bottom-4 left-4">
          {cart.length}
        </span>
      </div>
    </div>
  );
};

export default Header;
