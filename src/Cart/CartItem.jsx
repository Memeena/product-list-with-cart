import { useDispatch } from "react-redux";
import Button from "../utilities/Button";
import { formatCurrency } from "../utilities/helpers";
import { deleteItem } from "./cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <li className="flex justify-between items-center text-[16px] py-4">
      <div className="flex flex-col gap-1">
        <p className="text-rose-900 font-semibold">{item.name}</p>
        <div className="flex gap-4 items-center">
          <p className="text-red-500 font-semibold text-sm">{item.quantity}x</p>
          <p className="text-stone-500 text-sm">
            @ {formatCurrency(item.unitPrice)}
          </p>
          <p>{formatCurrency(item.totalPrice)}</p>
        </div>
      </div>
      <div className="border-stone-300 border-2 rounded-full  w-6 h-6 flex items-center justify-center">
        <Button onClick={() => dispatch(deleteItem(item.dessertId))}>
          <img src="./images/icon-remove-item.svg" alt="remove-item" />
        </Button>
      </div>
    </li>
  );
}
