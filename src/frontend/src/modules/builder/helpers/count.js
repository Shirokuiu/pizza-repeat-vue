import Vue from "vue";
import { CountEvent } from "@/common/constants";

export default class Count {
  static validateIncDec(valueToInt, currentIngredientIdx, ingredients) {
    return (
      valueToInt > ingredients[currentIngredientIdx].counter.maxInc ||
      valueToInt < ingredients[currentIngredientIdx].counter.maxDec
    );
  }

  static incDec(countEvent, currentIdx, arr) {
    const arrCopy = arr.slice();
    const value =
      countEvent === CountEvent.INC
        ? ++arrCopy[currentIdx].counter.value
        : --arrCopy[currentIdx].counter.value;

    const totalPrice = arrCopy[currentIdx].price * value;

    Vue.set(arrCopy, currentIdx, {
      ...arr[currentIdx],
      counter: {
        ...arr[currentIdx].counter,
        value,
      },
      totalPrice,
    });

    return arrCopy;
  }

  static change(currentIdx, valueToInt, arr) {
    const copyArr = arr.slice();
    const isValueNan = isNaN(valueToInt);

    if (isValueNan) {
      Vue.set(copyArr, currentIdx, {
        ...copyArr[currentIdx],
        counter: {
          ...copyArr[currentIdx].counter,
          value: 0,
        },
        totalPrice: 0,
      });

      return copyArr;
    }

    const validate = Count.validateIncDec(valueToInt, currentIdx, copyArr);
    const value = validate ? copyArr[currentIdx].counter.value : valueToInt;
    const totalPrice = validate
      ? copyArr[currentIdx].price * arr[currentIdx].counter.value
      : copyArr[currentIdx].price * valueToInt;

    Vue.set(copyArr, currentIdx, {
      ...copyArr[currentIdx],
      counter: {
        ...copyArr[currentIdx].counter,
        value,
      },
      totalPrice,
    });

    return copyArr;
  }

  static validateIncDecDrop(valueToInt, currentIdx, arr) {
    return valueToInt >= arr[currentIdx].counter.maxInc;
  }
}
