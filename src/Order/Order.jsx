import { useDispatch, useSelector } from "react-redux";
import Button from "../utilities/Button";
import { clearCart, getCart, getTotalCartPrice } from "../Cart/cartSlice";
import OrderItem from "./OrderItem";
import { formatCurrency } from "../utilities/helpers";

export default function Order({ setShowModal }) {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  return (
    <div className="flex bg-transparent/50 items-end overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative mx-auto w-full">
        <div className="border-0 rounded-t-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="relative px-6 py-8 mb-8 grid grid-flow-row auto-rows-max items-start justify-items-start gap-4">
            <img
              src="../assets/images/icon-order-confirmed.svg"
              alt="confirm-order"
            />
            <p className="text-4xl font-bold">Order Confirmed</p>
            <p className="text-[16px] text-stone-500">
              We hope you enjoy your food!
            </p>
            <ul className="flex flex-col mt-4 divide-y-2 divide-stone-200 bg-rose-50 px-6 py-4 rounded-md w-full">
              {cart.map((item) => (
                <OrderItem item={item} key={item.dessertId} />
              ))}

              <div className="py-4 flex justify-between items-center">
                <p>Order Total</p>
                <p className="text-2xl font-bold">
                  {formatCurrency(totalCartPrice)}
                </p>
              </div>
            </ul>
            <Button
              type="tertiary"
              to=""
              className="mt-4 w-full "
              onClick={() => {
                dispatch(clearCart());
                setShowModal(false);
              }}
            >
              Start New Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
