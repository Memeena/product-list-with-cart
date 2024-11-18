import { formatCurrency } from "../utilities/helpers";
// import Button from "../utilities/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../Cart/cartSlice";
import AddtoCart from "../Cart/AddtoCart";
import UpdateItemQuantity from "../Cart/UpdateItemQuantity";
export default function MenuItem({ item, width }) {
  const { image, name, category, id, price } = item;
  // const cart = useSelector(getCart);
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const dispatch = useDispatch();
  const img =
    width < 520 ? image.mobile : width < 720 ? image.tablet : image.desktop;

  const isInCart = currentQuantity > 0;
  function handleAddCart() {
    const newItem = {
      dessertId: id,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
      name: name,
      image: image.thumbnail,
    };
    console.log(newItem);
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex flex-col relative gap-1">
      <img src={img} alt="img" className="rounded-md" />
      {!isInCart ? (
        <AddtoCart handleAddCart={handleAddCart} />
      ) : (
        <UpdateItemQuantity dessertId={id} currentQuantity={currentQuantity} />
      )}

      <p className="mt-8 text-stone-500 text-sm">{category}</p>
      <p className="text-stone-900 font-semibold text-[16px]">{name}</p>
      <p className="text-[16px] font-semibold text-rose-500">
        {formatCurrency(price)}
      </p>
    </li>
  );
}
