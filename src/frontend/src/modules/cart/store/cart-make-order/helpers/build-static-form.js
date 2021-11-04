import { required } from "vuelidate/lib/validators";

export const buildStaticForm = () => [
  {
    id: -1,
    name: "Заберу сам",
    form: {
      addressName: undefined,
      address: {
        tel: "",
      },
      validationRule: undefined,
    },
  },
  {
    id: -2,
    name: "Новый адрес",
    addressName: "Новый адрес",
    form: {
      addressName: "Новый адрес",
      address: {
        tel: "",
        street: "",
        building: "",
        flat: "",
      },
      validationRule: {
        street: {
          required,
        },
        building: {
          required,
        },
      },
    },
  },
];
