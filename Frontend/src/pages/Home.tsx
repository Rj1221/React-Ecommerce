import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <>
      <div className="home">
        <section></section>
        <h1>
          Latest Products
          <Link to="/search" className="findmore">
            More
          </Link>
        </h1>
        <main>
          <ProductCard
            productId="1"
            name="Product 1"
            photo="https://png.pngtree.com/png-vector/20200403/ourlarge/pngtree-online-store-with-buy-button-on-laptop-png-image_2173971.jpg"
            price={100}
            stock={10}
            handler={addToCartHandler}
          />
        </main>
      </div>
    </>
  );
};

export default Home;
