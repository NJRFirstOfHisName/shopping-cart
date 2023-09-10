function CartEntry({ cartProduct, catalogProduct }) {
  let basePrice;
  cartProduct.quantity > 1
    ? (basePrice = ` ($${catalogProduct.price})`)
    : (basePrice = null);

  return (
    <div className="cart-card">
      <img src={catalogProduct.image} alt={catalogProduct.title} />
      <h2 className="cart-title">{catalogProduct.title}</h2>
      <h3>{cartProduct.quantity}</h3>
      <h3>
        ${cartProduct.quantity * catalogProduct.price}
        {basePrice}
      </h3>
    </div>
  );
}

export default CartEntry;
