import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { CheckOut } from ".";

const Cart = () => {
  return (
    <div>
      <button type="submit" className="text-[12px] text-white bg-green-600 hover:bg-green-700 flex gap-1 px-3 py-2.5">
        <ShoppingCartIcon className="h-4 w-4" />
        My cart
        <CheckOut />
      </button>
    </div>
  )
};

export default Cart;
