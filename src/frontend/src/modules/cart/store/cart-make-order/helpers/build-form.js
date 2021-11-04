import { buildStaticForm } from "@/modules/cart/store/cart-make-order/helpers";

export const buildForm = (formDataItems) =>
  [...buildStaticForm(), formDataItems ? formDataItems : undefined].filter(
    (it) => it
  );
