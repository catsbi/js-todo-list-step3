import { HttpMethod } from "../data/constant.js";

export const HttpClient = class {
    #options;
    #url

    constructor(url, ...options) {
        this.#options = {
            method: HttpMethod.GET,
            dataType: "JSON",
            headers: {
                'Content-Type': 'application/json'
            },
            ...options
        };
        this.#url = url;
    }

    #changeOptions(options) {
        this.#options = { ...this.#options, ...options };
    }

    excute(path) {
        return fetch(this.#url + path, this.#options).then(data => data.json());
    }

    get(path) {
        this.#changeOptions({method : HttpMethod.GET, body: null});
        return this.excute(path);
    }

    post(path, body){
        this.#changeOptions({method : HttpMethod.POST, body: JSON.stringify(body)});
        return this.excute(path);
    }

    put(path, body) {
        this.#changeOptions({method : HttpMethod.PUT, body: JSON.stringify(body)});
        return this.excute(path);
    }

    delete(path) {
        this.#changeOptions({method : HttpMethod.DELETE});
        return this.excute(path);
    }


}
