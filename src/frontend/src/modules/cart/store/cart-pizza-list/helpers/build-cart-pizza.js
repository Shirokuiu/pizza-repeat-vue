import { uniqueId } from "lodash";
import { getDescription } from "@/modules/cart/store/cart-pizza-list/helpers";

export const buildCartPizza = ({
  doughs,
  ingredients,
  pizzaName,
  sauces,
  sizes,
  price,
}) => {
  return {
    id: parseInt(uniqueId(), 10),
    counter: {
      value: 1,
      maxInc: undefined,
      maxDec: 1,
    },
    totalPrice: price,
    pizzaName,
    description: getDescription({ doughs, ingredients, sauces, sizes }),
    doughs,
    sizes,
    sauces,
    ingredients,
    price,
  };
};
