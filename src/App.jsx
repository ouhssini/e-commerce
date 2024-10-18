import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";

const App = () => {
  const [all, setAll] = useState([]);
  const [filtered, setFiltred] = useState([]);
  const [cart, setCart] = useState([]);
  const [isshow, setIsShow] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAll(data);
        setFiltred(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div onclick={()=>setIsShow(false)}>
      <ToastContainer />
      {isshow && <Cart products={cart} />}
      <Header setFiltred={setFiltred} cart={cart} all={all} isshow={isshow} setIsShow={setIsShow} />
      <main className="flex justify-center gap-2 px-10 pt-4 flex-wrap">
        <SideBar all={all} setFiltred={setFiltred} />
        <section className="flex-1 border border-slate-400 mb-6 basis-80">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 items-stretch justify-center">
            {filtered.map((product) => (
              <Card
                key={product.id}
                product={product}
                setCart={setCart}
                cart={cart}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
