import { CountEvent } from "@/common/constants";

const MutationType = {
  INC: "INC",
  DEC: "DEC",
  CHANGE: "CHANGE",
  DROP: "DROP",
};

const EventTypeMap = {
  [CountEvent.INC]: {
    mutationType: MutationType.INC,
    evt: CountEvent.INC,
    value: (value) => value,
  },
  [CountEvent.DEC]: {
    mutationType: MutationType.DEC,
    evt: CountEvent.DEC,
    value: (value) => value,
  },
  [CountEvent.CHANGE]: {
    mutationType: MutationType.CHANGE,
    evt: CountEvent.CHANGE,
    value: (value) => value,
  },
  [CountEvent.DROP]: {
    mutationType: MutationType.DROP,
    evt: CountEvent.INC,
    value: (value) => value,
  },
};

export class Count {
  static validateIncDec(valueToInt, currentIngredientIdx, arr) {
    return (
      valueToInt > arr[currentIngredientIdx].counter.maxInc ||
      valueToInt < arr[currentIngredientIdx].counter.maxDec
    );
  }

  static incDec(countEvent, currentIdx, arr) {
    const arrCopy = [...arr];
    const value =
      countEvent === CountEvent.INC
        ? ++arrCopy[currentIdx].counter.value
        : --arrCopy[currentIdx].counter.value;

    const totalPrice = arrCopy[currentIdx].price * value;

    arrCopy[currentIdx] = {
      ...arrCopy[currentIdx],
      counter: {
        ...arrCopy[currentIdx].counter,
        value,
      },
      totalPrice,
    };

    return arrCopy;
  }

  static change(currentIdx, valueToInt, arr) {
    const copyArr = [...arr];
    const isValueNan = isNaN(valueToInt);

    if (isValueNan) {
      copyArr[currentIdx] = {
        ...copyArr[currentIdx],
        counter: {
          ...copyArr[currentIdx].counter,
          value: 0,
        },
        totalPrice: 0,
      };

      return copyArr;
    }

    const validate = Count.validateIncDec(valueToInt, currentIdx, copyArr);
    const value = validate ? copyArr[currentIdx].counter.value : valueToInt;
    const totalPrice = validate
      ? copyArr[currentIdx].price * arr[currentIdx].counter.value
      : copyArr[currentIdx].price * valueToInt;

    copyArr[currentIdx] = {
      ...copyArr[currentIdx],
      counter: {
        ...copyArr[currentIdx].counter,
        value,
      },
      totalPrice,
    };

    return copyArr;
  }

  static validateIncDecDrop(valueToInt, currentIdx, arr) {
    return valueToInt >= arr[currentIdx].counter.maxInc;
  }

  static buildCommitMutation({ arr, evtType, value, arrId }, cb) {
    let commitData;
    const valueToInt = parseInt(value, 10);
    const currentArrIdx = arr.findIndex(({ id }) => id === arrId);

    const valueToCommit =
      evtType === CountEvent.INC ||
      evtType === CountEvent.DEC ||
      evtType === CountEvent.DROP
        ? EventTypeMap[evtType].value(currentArrIdx)
        : EventTypeMap[evtType].value({
            id: currentArrIdx,
            value: valueToInt,
          });

    if (evtType === CountEvent.DROP) {
      if (!Count.validateIncDecDrop(valueToInt, currentArrIdx, arr)) {
        commitData = {
          mutationType: EventTypeMap[evtType].mutationType,
          payload: {
            type: EventTypeMap[evtType].evt,
            value: valueToCommit,
          },
        };

        cb(commitData);
      }

      return;
    }

    commitData = {
      mutationType: EventTypeMap[evtType].mutationType,
      payload: {
        type: EventTypeMap[evtType].evt,
        value: valueToCommit,
      },
    };

    cb(commitData);
  }
}
