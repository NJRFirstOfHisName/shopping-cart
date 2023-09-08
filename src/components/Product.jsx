function Product({ productData }) {
  return (
    <div className="product card">
      <ul className="productInfo">
        <li>{productData.title}</li>
        <li>{productData.category}</li>
        <li>{productData.price}</li>
      </ul>
      <img src={productData.image} alt={productData.title}></img>
      <p>{productData.description}</p>
    </div>
  );
}

export default Product;
