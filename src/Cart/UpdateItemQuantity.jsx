import { useDispatch } from "react-redux";
import Button from "../utilities/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ dessertId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <Button type="primary">
      <p onClick={() => dispatch(decreaseItemQuantity(dessertId))}>-</p>
      <span className="text-sm font-bold">{currentQuantity}</span>
      <p onClick={() => dispatch(increaseItemQuantity(dessertId))}>+</p>
    </Button>
  );
}
