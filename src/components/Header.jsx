import { useEffect, useRef } from "react";
import { ShoppingCart, Search } from 'lucide-react'


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
    <>

   
    <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">E-SHOP</h1>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
              onChange={handleSearch}
                type="text"
                placeholder="Search"
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            <button ref={cartRef} onClick={() => setIsShow(!isshow)} className="relative">
              <ShoppingCart className="text-gray-600" size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            </button>
          </div>
        </div>
      </header>
      <div className="relative block md:hidden mt-5 text-center">
              <input
              onChange={handleSearch}
                type="text"
                placeholder="Search"
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-20 top-2.5 text-gray-400" size={20} />
            </div>
      </>
  );
};

export default Header;
