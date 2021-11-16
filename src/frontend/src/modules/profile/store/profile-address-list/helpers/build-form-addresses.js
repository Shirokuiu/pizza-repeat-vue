const LabelMap = {
  name: "Название адреса*",
  street: "Улица*",
  building: "Дом*",
  flat: "Квартира",
  comment: "Комментарий",
};

const PlaceholderMap = {
  name: "Введите название адреса",
  street: "Введите название улицы",
  building: "Введите номер дома",
  flat: "Введите № квартиры",
  comment: "Введите комментарий",
};

export const buildFormAddresses = (addresses) => {
  return addresses.map((address) => {
    return Object.keys(address)
      .filter((it) => !["id", "userId"].includes(it))
      .reduce((obj, v) => {
        obj[v] = {
          name: v,
          value: address[v],
          placeholder: PlaceholderMap[v],
          label: LabelMap[v],
          errorText: "Обязательно для заполнения",
          isRequired: ["name", "street", "building"].includes(v),
          isEdit: false,
        };

        return { ...obj, id: address.id, isEdit: false };
      }, {});
  });
};
