import CoffeeMenu from "./Cardss/CoffeeCards.jsx";
import PastryMenu from "./Cardss/PastriesCards.jsx";
import CupCakesMenu from "./Cardss/CupCakesCards.jsx";
import { useState } from "react";

function App() {
  const [view, setView] = useState("coffees");
  const backgrounds = {
    coffees: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200')`,
    pastries: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200')`,
    cupcakes: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1587668178277-295251f900ce?w=1200')`,
  };
  function CoffeePage() {}
  return (
    <>
      <header className="header">
        <input type="text" placeholder="Search"></input>
        <button> search</button>
      </header>
      <div className="siderbar">
        <nav>
          <button onClick={() => setView("coffees")}>Coffees</button>
          <button onClick={() => setView("pastries")}>Pastries</button>
          <button onClick={() => setView("cupcakes")}>Cupcakes</button>
        </nav>
      </div>
      <main style={{ background: backgrounds[view] }} className="main-content">
        {view === "coffees" && (
          <CoffeeMenu category={"Coffee Menu"} image={view} />
        )}
        {view === "pastries" && <PastryMenu category={"Pastries Menu"} />}
        {view === "cupcakes" && <CupCakesMenu category={"CupCakes Menu"} />}
      </main>

      <footer className="footer">© 2026 Coffee Shop</footer>
    </>
  );
}

export default App;
