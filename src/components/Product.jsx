import { useState } from "react";

function Product({ productData, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  function toggleText() {
    let points = document.querySelectorAll("points");
    let showMoreText = document.querySelectorAll("more-text");
    let buttonText = document.querySelectorAll("more-button");

    if (points.style.display === "none") {
      showMoreText.style.display = "none";
      points.style.display = "inline";
      buttonText.innerHTML = "Show More";
    } else {
      showMoreText.style.display = "inline";
      points.style.display = "none";
      buttonText.innerHTML = "Show Less";
    }
  }

  return (
    <div className="product card">
      <div className="card-image">
        <img src={productData.image} alt={productData.title} />
      </div>
      <div className="card-text">
        <p className="card-category">{productData.category}</p>{" "}
        <h2 className="card-title">{productData.title}</h2>{" "}
        <p className="card-body">
          {productData.descriptionStart}
          <span className="points">...</span>
          <span className="more-text">{productData.descriptionEnd}</span>
        </p>
        <button type="button" className="more-button" onClick={toggleText}>
          Show more
        </button>
        <div className="card-price">${productData.price}</div>
        <div className="card-buy">
          <input
            className={`card-input`}
            type="number"
            placeholder="1"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <span
            className="material-symbols-outlined card-cart"
            id={productData.id}
            onClick={(e) => addToCart(e, quantity)}
          >
            shopping_cart
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;
