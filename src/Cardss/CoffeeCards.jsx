function cards(props) {
  const coffees = [
    {
      id: 1,
      name: "Espresso",
      price: 3.5,
      image:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500",
      description: "Bold, intense, and full-bodied.",
    },
    {
      id: 2,
      name: "Cappuccino",
      price: 4.5,
      image:
        "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500",
      description: "Equal parts espresso, steamed milk, and foam.",
    },
    {
      id: 3,
      name: "Latte",
      price: 4.75,
      image:
        "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500",
      description: "Creamy espresso with plenty of steamed milk.",
    },
    {
      id: 4,
      name: "Americano",
      price: 3.25,
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500",
      description: "Espresso shots topped with hot water.",
    },
    {
      id: 5,
      name: "Mocha",
      price: 5.0,
      image:
        "https://images.unsplash.com/photo-1596078841242-12f73dc697c6?w=500",
      description: "A chocolatey twist on a classic latte.",
    },
  ];

  return (
    <>
      <h1 className="h1">{props.category}</h1>
      <div
        className={`menu-container `}
      >
        {coffees.map((coffee) => (
          <div key={coffee.id} className="coffee-card">
            {/* The Image Tag */}
            <img
              src={coffee.image}
              alt={coffee.name}
              className="coffee-image"
            />

            <h3>{coffee.name}</h3>
            <p className="description">{coffee.description}</p>
            <div className="price-tag">${coffee.price.toFixed(2)}</div>
            <button
              className="add-button"
              onClick={() => props.onAddToCart(coffee)}
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
