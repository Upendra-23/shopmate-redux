import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./Cartcard.css";

export const Cartcard = ({ product }) => {
  const { name, price, image } = product;
  const dispatch = useDispatch();
  return (
    <section className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => dispatch(remove(product))}>Remove</button>
    </section>
  );
};
