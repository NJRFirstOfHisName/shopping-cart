import CartEntry from "./CartEntry";
import { useLocation } from "react-router-dom";

function ShoppingCart() {
  const location = useLocation();
  console.log(location);
  const catalog = location.state.catalog;
  const cart = location.state.cart;

  let cartArray = [];
  if (cart) {
    cart.forEach((cartProduct) => {
      const catalogProduct = catalog[cartProduct.id];
      cartArray.push(
        <CartEntry
          key={cartProduct.id}
          cartProduct={cartProduct}
          catalogProduct={catalogProduct}
        />
      );
    });
  }

  return <div className="cart">{cartArray}</div>;
}

export default ShoppingCart;
