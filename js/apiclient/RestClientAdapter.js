import { RestClient } from "./RestClient.js";
import { BASE_URL } from "../data/constant.js";
export const RestClinetAdapter = class extends RestClient {
  constructor() {
    super(BASE_URL);
  }
};

export default RestClinetAdapter;
