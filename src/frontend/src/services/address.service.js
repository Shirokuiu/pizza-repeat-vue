import { axios } from "@/plugins";

export class AddressService {
  #resources;

  constructor(resources) {
    this.#resources = resources;
  }

  async get() {
    const { data } = await axios.get(this.#resources);

    return data;
  }

  async post(body) {
    const { data } = await axios.post(this.#resources, body);

    return data;
  }
}