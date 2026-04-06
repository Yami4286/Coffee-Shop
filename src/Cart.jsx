// Cart.js - separate file
function Cart({ items, onRemove }) {
  // Receives state as props
  return (
    <div className="Cart">
      <h3>Cart ({items.length})</h3>
      {items.map((item, i) => (
        <div key={i} className="CartDiv">
          <img src={item.image} alt={item.name} />
          <p>
            <b>Name: </b>
            {item.name}
          </p>
          <p>
            <b>Price: </b>
            {item.price}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove(i);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
