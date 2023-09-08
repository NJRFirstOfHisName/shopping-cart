function Product({ productData }) {
  return (
    <div className="product card">
      <div className="card-image">
        <img src={productData.image} alt={productData.title} />
      </div>
      <div className="card-text">
        <p className="card-category">{productData.category}</p>{" "}
        <h2 className="card-title">{productData.title}</h2>{" "}
        <p className="card-body">{productData.description}</p>
        <div className="card-price">${productData.price}</div>
        <div className="card-buy">
          <input
            className="card-input"
            type="number"
            placeholder="1"
            min="1"
            max="99"
          />
          <span className="material-symbols-outlined card-cart">
            shopping_cart
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;
