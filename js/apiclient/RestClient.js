import { HttpMethod } from "../data/constant.js";

export const RestClient = class {
  #url;
  #options;

  constructor(url, options) {
    this.#url = url;
    this.#options = {
      method: HttpMethod.GET,
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };
  }

  #changeOptions(options) {
    this.#options = { ...this.#options, ...options };
  }

  execute(path) {
    return fetch(this.#url + path, this.#options).then((data) => data.json());
  }

  get(path) {
    this.#changeOptions({ method: HttpMethod.GET, body: null });
    return this.execute(path);
  }

  post(path, body) {
    this.#changeOptions({
      method: HttpMethod.POST,
      body: JSON.stringify(body),
    });
    return this.execute(path);
  }

  put(path, body) {
    this.#changeOptions({ method: HttpMethod.PUT, body: JSON.stringify(body) });
    return this.execute(path);
  }

  delete(path) {
    this.#changeOptions({ method: HttpMethod.DELETE, body: null });
    return this.execute(path);
  }
};
