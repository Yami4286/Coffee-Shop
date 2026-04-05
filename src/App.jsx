import CoffeeMenu from "./Cardss/CoffeeCards.jsx";
import PastryMenu from "./Cardss/PastriesCards.jsx";
import { useState } from "react";

function App() {
  const [view, setView] = useState("coffees")
   function CoffeePage(){}
  return (
    <>
       <header   className="header">
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
      <main className="main-content">
        {view === "coffees" && <CoffeeMenu category={"Coffee Menu"}/>}
          {view === "pastries" && <PastryMenu category={"Pastries Menu"}/>}
      </main>
      
      <footer className="footer">© 2026 Coffee Shop</footer>
    </>
  );
}

export default App;
