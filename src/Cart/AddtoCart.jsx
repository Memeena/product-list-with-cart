import Button from "../utilities/Button";

export default function AddtoCart({ image, handleAddCart }) {
  return (
    // <div>
    <Button type="secondary" onClick={handleAddCart}>
      <p>Add to cart</p>
    </Button>
    // </div>
  );
}
