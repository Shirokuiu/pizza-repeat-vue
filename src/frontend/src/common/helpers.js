import Vue from "vue";
import { countAction } from "src/common/constants";

export const canIncOrDec = (action, currentArrIndex, arr) => {
  switch (action) {
    case countAction.INC:
      return arr[currentArrIndex].count < arr[currentArrIndex].maxInc;
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
