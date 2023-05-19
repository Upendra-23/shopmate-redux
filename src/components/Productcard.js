import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./productcard.css";
import { useEffect, useState } from "react";

export const Productcard = ({ product }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIncart = cartList.find((item) => item.id === product.id);
    if (productIncart) setIsInCart(true);
    else setIsInCart(false);
  }, [cartList, product.id]);

  return (
    <div className="productCard">
      <img src={product.image} alt={product.name} />
      <p className="name">{product.name}</p>
      <div className="action">
        <p>${product.price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};
