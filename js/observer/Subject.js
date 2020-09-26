export const Subject = class {
    #observers;_state;_service;

    constructor(observers = []) {
        this.#observers = new Set(observers);
    }

    setState(state){
        this._state = {...this._state, ...state};
    }

    addObservers(...observers) {
        observers.forEach(this.#addObserver);
    }

    #addObserver = (observer) => {
        this.#observers.add(observer);
    };

    deleteObserver = (observer) => {
        this.#observers.delete(observer);
    };

    notify = () =>{
        if (this.#observers && this.#observers.size > 0) {
            this.#observers.forEach(observer=> observer.setState(this));
        }
    };
    execute(){

    }
};
