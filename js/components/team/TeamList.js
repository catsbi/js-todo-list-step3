import { Observer } from "../../observer/Observer.js";

export const TeamList = class extends Observer {

    constructor(target, subject) {
        super(target, subject);
    }
    get state(){
        return this._state;
    }

    setState(subject) {
        const { teams } = subject._service;
        super.setState({ teams });
        this.render();
    }

    render(){
        // this._target.innerHTML =
    }

    template() {
        return undefined;
    }
};
