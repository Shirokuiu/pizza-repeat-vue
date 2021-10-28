import { getDescription } from "@/modules/cart/store/cart-pizza-list/helpers/get-description";

export const updateCartPizza = (cartPizza) => {
  const { doughs, sizes, sauces, ingredients, price, counter } = cartPizza;

  return {
    ...cartPizza,
    description: getDescription({ doughs, sizes, sauces, ingredients }),
    totalPrice: price * counter.value,
  };
};
