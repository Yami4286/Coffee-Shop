import CoffeeMenu from "./Cardss/CoffeeCards.jsx";
import PastryMenu from "./Cardss/PastriesCards.jsx";
import CupCakesMenu from "./Cardss/CupCakesCards.jsx";
import Cart from "./Cart.jsx";
import { useState } from "react";

function App() {
  const [view, setView] = useState("coffees");
  const [cart, setcart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
  const backgrounds = {
    coffees: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200')`,
    pastries: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200')`,
    cupcakes: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1587668178277-295251f900ce?w=1200')`,
  };

  const addToCart = (item) => {
    setcart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setcart(cart.filter((_, i) => i !== index));
  };

  function CoffeePage() {}
  return (
    <>
      <header className="header">
        <div className="SearchDiv">
          <input className="SearchBox"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button className="SearchButton"> search</button>
        </div>
        <br />
        <div onClick={() => setCartOpen(!cartOpen)}>
          Cart ({cart.length}){" "}
          {cartOpen && (
            <Cart
              items={cart}
              onRemove={removeFromCart}
              onClose={() => setCartOpen(false)}
            />
          )}{" "}
        </div>
      </header>
      <div className="siderbar">
        <nav>
          <div onClick={() => setView("coffees")}>Coffees</div>
          <div onClick={() => setView("pastries")}>Pastries</div>
          <div onClick={() => setView("cupcakes")}>Cupcakes</div>
        </nav>
      </div>
      <main style={{ background: backgrounds[view] }} className="main-content">
        {view === "coffees" && (
          <CoffeeMenu category={"Coffee Menu"} onAddToCart={addToCart}   searchTerm={searchTerm}/>
        )}
        {view === "pastries" && (
          <PastryMenu category={"Pastries Menu"} onAddToCart={addToCart}   searchTerm={searchTerm} />
        )}
        {view === "cupcakes" && (
          <CupCakesMenu category={"CupCakes Menu"} onAddToCart={addToCart}  searchTerm={searchTerm} />
        )}
      </main>

      <footer className="footer">© 2026 Coffee Shop</footer>
    </>
  );
}

export default App;
