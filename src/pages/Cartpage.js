import { useSelector } from "react-redux";
import { Cartcard } from "../components/Cartcard";
import { useTitle } from "../hooks/useTitle";

export const Cartpage = () => {
  useTitle(`cart`);

  const products = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);

  return (
    <main>
      <section className="cart">
        <h1>
          Card items: {products.length} / ${total}
        </h1>
        {products.map((product) => (
          <Cartcard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
