import { axios } from "@/plugins";

export class OrdersService {
  #resources;

  constructor(resources) {
    this.#resources = resources;
  }

  async post(body) {
    const { data } = await axios.post(this.#resources, body);

    return data;
  }
}
