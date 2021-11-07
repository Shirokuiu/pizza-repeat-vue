import { required } from "vuelidate/lib/validators";

export const buildNewAddressForm = () => ({
  validationRule: {
    name: {
      required,
    },
    street: {
      required,
    },
    building: {
      required,
    },
  },
  name: {
    name: "name",
    value: "",
    placeholder: "Введите название адреса",
    label: "Название адреса*",
    errorText: "Обязательно для заполнения",
  },
  street: {
    name: "street",
    value: "",
    placeholder: "Введите название улицы",
    label: "Улица*",
    errorText: "Обязательно для заполнения",
  },
  building: {
    name: "building",
    value: "",
    placeholder: "Введите номер дома",
    label: "Дом*",
    errorText: "Обязательно для заполнения",
  },
  flat: {
    name: "flat",
    value: "",
    placeholder: "Квартира",
    label: "Квартира",
  },
  comment: {
    name: "comment",
    value: "",
    placeholder: "Введите комментарий",
    label: "Комментарий",
  },
});
