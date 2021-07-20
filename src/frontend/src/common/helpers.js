import { countAction } from "src/common/constants";

export const canIncOrDec = (action, currentArrIndex, arr) => {
  switch (action) {
    case countAction.INC:
      return arr[currentArrIndex].count < arr[currentArrIndex].maxInc;
    case countAction.DEC:
      return arr[currentArrIndex].count > arr[currentArrIndex].maxDec;
  }
};
