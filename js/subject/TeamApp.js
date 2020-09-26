import { Subject } from "../observer/Subject.js";
import { Service } from "../service.js";

export const TeamApp = class extends Subject {

    constructor(target) {
        super();
        this._service = new Service();
        this.setup();

    }
    async setup() {
        const teams = await this._service.getTeams();
        this.setState({ teams });
        this.addObservers(new TeamList)
    }
};


new TeamApp(document.querySelector(".team-list-container"));
