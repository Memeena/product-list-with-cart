export default function EmptyCart() {
  return (
    <div className="bg-white flex flex-col gap-4 py-6 rounded-lg px-6">
      <p className="text-3xl text-red-500 font-bold ">Your cart (0)</p>
      <div className="flex flex-col items-center">
        <img
          src="../assets/images/illustration-empty-cart.svg"
          alt="empty-cart"
          className="items-center"
        />
        <p className="text-[16px] text-rose-900 font-semibold">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}
