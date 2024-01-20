import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId: string;
  name: string;
  photo: string;
  price: number;
  stock: number;
  handler: () => void;
};
// const server = "http://localhost:5000";
const ProductCard = (props: ProductsProps) => {
  return (
    <>
      <div className="product-card">
        <img src={props?.photo} alt={props?.name} />
        <p>{props?.name}</p>
        <span>₹{props?.price}</span>
        <div>
          <button onClick={props?.handler}>
            <FaPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
