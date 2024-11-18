import { formatCurrency } from "../utilities/helpers";

export default function OrderItem({ item }) {
  console.log(item);
  return (
    <li className=" grid grid-cols-[max-content,1fr,max-content] justify-between gap-4 items-center text-sm py-4">
      <img
        src={`${item.image}`}
        alt="thumbnail"
        className="w-12 h-12 rounded-md"
      />
      <div className="min-w-0 space-y-1">
        <p className="font-semibold text-[16px] truncate ">{item.name}</p>
        <div className="flex gap-4  items-center">
          <p className="text-red-500 font-semibold text-sm">{item.quantity}x</p>
          <p className="text-stone-500 text-sm">
            @ {formatCurrency(item.unitPrice)}
          </p>
        </div>
      </div>
      <p className="text-[16px] font-semibold">
        {formatCurrency(item.totalPrice)}
      </p>
    </li>
  );
}
