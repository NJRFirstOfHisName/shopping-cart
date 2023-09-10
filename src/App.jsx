import { useState } from "react";
import "./App.css";
import Product from "./components/Product";
import FetchCatalog from "./components/FetchCatalog";
import { Link } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const { catalog, error, loading } = FetchCatalog();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  function addToCart(e, addQuantity) {
    const productID = e.target.id;
    let found = false;
    const updatedCart = cart.map((product) => {
      if (product.id === productID) {
        found = true;
        return { ...product, quantity: product.quantity + addQuantity };
      } else {
        return product;
      }
    });
    if (!found) {
      setCart([...updatedCart, { id: productID, quantity: addQuantity }]);
    } else {
      setCart(updatedCart);
    }
  }

  let catalogArray = [];
  catalog.forEach((product) => {
    const descriptionStart = product.description.slice(0, 100);
    const descriptionEnd = product.description.slice(100);
    product.descriptionStart = descriptionStart;
    product.descriptionEnd = descriptionEnd;
    catalogArray.push(
      <Product key={product.id} productData={product} addToCart={addToCart} />
    );
  });

  return (
    <>
      <div className="navbar">
        <h1>Navigation</h1>
        <Link to="cart" state={{ catalog: catalog, cart: cart }}>
          Cart
        </Link>
      </div>
      <div className="container">{catalogArray}</div>
      <p className="footer">
        Layout adapted from{" "}
        <a href="https://codepen.io/aryancodeworm/pen/mdMjbbp">La Saveur</a> by{" "}
        <a href="https://codepen.io/aryancodeworm">Ayran Tayal</a>
      </p>
    </>
  );
}

export default App;
