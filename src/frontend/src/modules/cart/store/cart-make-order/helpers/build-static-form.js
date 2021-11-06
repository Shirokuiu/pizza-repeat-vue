import { required } from "vuelidate/lib/validators";

export const buildStaticForm = () => [
  {
    id: -1,
    name: "Заберу сам",
    form: {
      addressName: undefined,
      address: {
        phone: "",
      },
      validationRule: undefined,
    },
  },
  {
    id: -2,
    name: "Новый адрес",
    form: {
      addressName: "Новый адрес",
      address: {
        phone: "",
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
