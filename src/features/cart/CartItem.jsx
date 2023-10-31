import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";

export default function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}
