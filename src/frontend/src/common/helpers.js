import Vue from "vue";
import { countAction } from "src/common/constants";

export const numberWithSpace = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export const canIncOrDec = (action, currentArrIndex, arr) => {
  switch (action) {
    case countAction.INC:
      return (
        arr[currentArrIndex].count < arr[currentArrIndex].maxInc ||
        !arr[currentArrIndex].maxInc
      );
    case countAction.DEC:
      return arr[currentArrIndex].count > arr[currentArrIndex].maxDec;
  }
};

export const inc = (arr, currentArrIndex) => {
  Vue.set(arr, currentArrIndex, {
    ...arr[currentArrIndex],
    count: ++arr[currentArrIndex].count,
    totalPrice: arr[currentArrIndex].count * arr[currentArrIndex].price,
  });
};

export const dec = (arr, currentArrIndex) => {
  Vue.set(arr, currentArrIndex, {
    ...arr[currentArrIndex],
    count: --arr[currentArrIndex].count,
    totalPrice: arr[currentArrIndex].count * arr[currentArrIndex].price,
  });
};

export const incDecInputChange = (arr, currentArrIndex, inputValue) => {
  const value = parseInt(inputValue, 10);

  if (isNaN(value)) {
    Vue.set(arr, currentArrIndex, {
      ...arr[currentArrIndex],
      count: arr[currentArrIndex].count,
      totalPrice: arr[currentArrIndex].totalPrice,
    });

    return;
  }

  Vue.set(arr, currentArrIndex, {
    ...arr[currentArrIndex],
    count:
      value > arr[currentArrIndex].maxInc || value < arr[currentArrIndex].maxDec
        ? arr[currentArrIndex].count
        : value,
    totalPrice:
      value > arr[currentArrIndex].maxInc || value < arr[currentArrIndex].maxDec
        ? arr[currentArrIndex].price * arr[currentArrIndex].count
        : arr[currentArrIndex].price * value,
  });
};
