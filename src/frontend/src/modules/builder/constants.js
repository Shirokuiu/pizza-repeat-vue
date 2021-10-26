import { CountEvent } from "@/common/constants";
import {
  INGREDIENT_CHANGE,
  INGREDIENT_DEC,
  INGREDIENT_DROP,
  INGREDIENT_INC,
} from "@/modules/builder/store/mutation-types";

export const sizeClassMap = {
  light: "small",
  large: "big",
};

export const sauceClassMap = {
  tomato: "tomato",
  creamy: "creamy",
};

export const fillingClassCount = {
  2: "second",
  3: "third",
};

export const EventTypeMap = {
  [CountEvent.INC]: {
    evt: INGREDIENT_INC,
    type: CountEvent.INC,
    value: (value) => value,
  },
  [CountEvent.DEC]: {
    evt: INGREDIENT_DEC,
    type: CountEvent.DEC,
    value: (value) => value,
  },
  [CountEvent.CHANGE]: {
    evt: INGREDIENT_CHANGE,
    type: CountEvent.CHANGE,
    value: (value) => value,
  },
  [CountEvent.DROP]: {
    evt: INGREDIENT_DROP,
    type: CountEvent.INC,
    value: (value) => value,
  },
};
