import Logo from "../assets/logo .png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

export const Header = () => {
  const cnt = useSelector((state) => state.cartState.cartList.length);
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
        <span>shopmate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart">
        <span>Cart:{cnt}</span>
      </Link>
    </header>
  );
};
