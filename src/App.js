import Products from "./components/products/Products";
import Cart from "./components/UI/Cart";
import Navbar from "./components/UI/Navbar";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const showHandler = () => {
    setShowCart(true);
  };
  const hideHandler = () => {
    setShowCart(false);
  };

  const addItemToCart = (item) => {
    const findIndex = cartItems.findIndex((element) => element.id === item.id);

    if (findIndex !== -1) {

      let cartArray = [...cartItems];

      const newItem = {
        ...cartArray[findIndex],
        quantity: cartArray[findIndex].quantity + 1,
      };

      cartArray[findIndex] = newItem;

      setCartItems(cartArray);
    } else {
      const itemToSave = {
        ...item,
        quantity: 1,
      };
      setCartItems((prevState) => [...prevState, itemToSave]);
    }
  };

  const removeProduct = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      {showCart && (
        <Cart
          onHideCart={hideHandler}
          items={cartItems}
          removeProduct={removeProduct}
        />
      )}
      <Navbar onShowCart={showHandler} cartItemsLength={cartItems.length} />
      <Products setCartItems={addItemToCart} />
    </div>
  );
}

export default App;
