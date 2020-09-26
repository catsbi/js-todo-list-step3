import RestClinetAdapter from "../apiclient/RestClientAdapter.js";

export const Service = class {
  #restClient;

  constructor() {
    this.#restClient = new RestClinetAdapter();
  }

  addTeam() {
    // this.#restClient.
  }
};
