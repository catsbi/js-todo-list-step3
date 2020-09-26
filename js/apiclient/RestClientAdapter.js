import { RestClient } from "./RestClient.js";

export const RestClinetAdapter = class extends RestClient {
  constructor() {
    super(BASE_URL);
  }
  execute() {
    // 로딩바추가
    super.execute();
  }
};
