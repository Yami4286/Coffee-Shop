function cards(props) {
 const cupcakes = [
  { 
    id: 201, 
    name: "Red Velvet", 
    price: 4.25, 
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500",
    description: "Classic cocoa-infused red cake topped with tangy cream cheese frosting." 
  },
  { 
    id: 202, 
    name: "Dark Chocolate Honey", 
    price: 4.50, 
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500",
    description: "Rich dark chocolate sponge with a gooey honey-comb center." 
  },
  { 
    id: 203, 
    name: "Vanilla Bean", 
    price: 3.95, 
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=500",
    description: "Madagascar vanilla bean cake with a light and fluffy buttercream swirl." 
  },
  { 
    id: 204, 
    name: "Lemon Raspberry", 
    price: 4.75, 
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=500",
    description: "Zesty lemon cake filled with fresh raspberry jam and citrus frosting." 
  },
  { 
    id: 205, 
    name: "Salted Caramel", 
    price: 4.50, 
    image: "https://images.unsplash.com/photo-1599785209796-786432b228bc?w=500",
    description: "Sweet caramel cake drizzled with sea salt and homemade toffee bits." 
  }
];

  return (
    <>
    <h1 className="h1">{props.category}</h1>
    <div className={`menu-container `}>
      {cupcakes.map((coffee) => (
        <div key={coffee.id} className="coffee-card">
          {/* The Image Tag */}
          <img src={coffee.image} alt={coffee.name} className="coffee-image" />

          <h3>{coffee.name}</h3>
          <p className="description">{coffee.description}</p>
          <div className="price-tag">${coffee.price.toFixed(2)}</div>
          <button
            className="add-button"
            onClick={() => handleAddToCart(coffee.name)}
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
