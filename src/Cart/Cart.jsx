import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { getCart, getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/helpers";
import Button from "../utilities/Button";
import { useState } from "react";
import Order from "../Order/Order";

export default function Cart() {
  const cart = useSelector(getCart);
  const totalCartQuanitity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const [showModal, setShowModal] = useState(false);
  console.log(cart);
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="bg-white rounded-lg py-6 px-6 flex flex-col gap-4 pb-8">
      <p className="text-3xl text-red-500 font-bold ">
        Your cart ({totalCartQuanitity})
      </p>
      <ul className="flex flex-col divide-y-2 divide-stone-100">
        {cart.map((item) => (
          <CartItem item={item} key={item.dessertId} />
        ))}
      </ul>
      <p className="border-t-2 border-stone-100 py-6 flex justify-between items-center text-sm font-semibold">
        Order Total{" "}
        <span className="text-2xl font-bold">
          {formatCurrency(totalCartPrice)}
        </span>
      </p>
      <div className="text-sm flex bg-rose-50 m-2 px-2 py-3 rounded-lg gap-2">
        <img src="./images/icon-carbon-neutral.svg" alt="carbon-neutral" />
        <p>
          This is a <span>carbon-neutral</span> delivery
        </p>
      </div>
      <Button type="tertiary" onClick={() => setShowModal(true)}>
        Confirm Order
      </Button>
      {showModal && <Order setShowModal={setShowModal} />}
    </div>
  );
}
