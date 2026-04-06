function cards(props) {
 const pastries = [
  { 
    id: 101, 
    name: "Butter Croissant", 
    price: 3.25, 
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500",
    description: "Flaky, golden-brown layers of pure buttery goodness." 
  },
  { 
    id: 102, 
    name: "Chocolate Muffin", 
    price: 3.75, 
    image: "https://images.unsplash.com/photo-1762417420596-b90e84efcfad?q=80&w=2340",
    description: "Rich cocoa muffin packed with dark chocolate chunks." 
  },
  { 
    id: 103, 
    name: "Cinnamon Roll", 
    price: 4.50, 
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=500",
    description: "Soft dough swirled with cinnamon sugar and vanilla glaze." 
  },
  { 
    id: 104, 
    name: "Blueberry Scone", 
    price: 3.50, 
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=500",
    description: "Crumbly and light, filled with fresh wild blueberries." 
  },
  { 
    id: 105, 
    name: "Apple Turnover", 
    price: 3.95, 
    image: "https://images.unsplash.com/photo-1657313938000-23c4322dbe22?q=80&w=2340",
    description: "Crispy puff pastry stuffed with spiced apple filling." 
  }
];
  return (
    <>
    <h1 className="h1">{props.category}</h1>
    <div className={`menu-container`}>
      {pastries.map((coffee) => (
        <div key={coffee.id} className="coffee-card">
          {/* The Image Tag */}
          <img src={coffee.image} alt={coffee.name} className="coffee-image" />

          <h3>{coffee.name}</h3>
          <p className="description">{coffee.description}</p>
          <div className="price-tag">${coffee.price.toFixed(2)}</div>
          <button
            className="add-button"
            onClick={() => props.onAddToCart(coffee.name)}
          >
            Add to Order
          </button>
        </div>
      ))}
    </div>
    </>
  );
}

export default cards;
