import { Subject } from "../observer/Subject.js";

export const TeamApp = class extends Subject {

    constructor(target) {
        super();
        this.setup();
    }
    async setup() {

    }
};


new TeamApp(document.querySelector(".team-list-container"));
