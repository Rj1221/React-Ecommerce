import { FC } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const CartItem: FC<{
  id: number;
  name: string;
  price: number;
  quantity: number;
  photo: string;
  stock: number;
}> = (props) => {
  return (
    <>
      <div className="cart-item">
        <img src={props?.photo} alt={props?.name} />
        <article>
          <Link to={`/product/${props.id}`}>{props?.name}</Link>
          <span>₹{props?.price}</span>
        </article>
        <div>
          <button>-</button>
          <span>{props?.quantity}</span>
          <button>+</button>
        </div>
        <div>
          <FaTrash />
        </div>
      </div>
    </>
  );
};

export default CartItem;
