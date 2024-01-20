import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
const cartItems = [
  {
    id: 1,
    name: "Shoes",
    price: 100,
    qty: 2,
    photo:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    stock: 10,
  },
  {
    id: 2,
    name: "Shirt",
    price: 200,
    qty: 1,
    photo:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/z/g/d/xl-st2-vebnor-original-imagpw72vhqfczsp.jpeg?q=90&crop=false",
    stock: 10,
  },
];
const subTotal = cartItems.reduce(
  (acc, item) => acc + item.price * item.qty,
  0
);

const tax = Math.round(subTotal * 0.05 * 100) / 100;
const shippingCharge = subTotal > 1000 ? 0 : 40;
const discount = subTotal > 1000 ? 0 : 40;
const total = subTotal + tax + shippingCharge - discount;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValideCouponCode, setIsValideCouponCode] = useState<boolean>(false);
  useEffect(() => {
    if (couponCode === "DISCOUNT") {
      setIsValideCouponCode(true);
    } else {
      setIsValideCouponCode(false);
    }
  }, [couponCode]);
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.qty}
              photo={item.photo}
              stock={item.stock}
            />
          ))
        ) : (
          <h1>No Items Added </h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subTotal}</p>
        <p>Tax: ₹{tax}</p>
        <p>Shipping: ₹{shippingCharge}</p>
        <p>
          Discount: <em className="red">- ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValideCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon Code
              <VscError />
            </span>
          ))}

        {cartItems.length > 0 ? (
          <Link to="/shipping">Checkout</Link>
        ) : (
          <button disabled>Checkout</button>
        )}
      </aside>
    </div>
  );
};

export default Cart;
