import { Subject } from "../observer/Subject.js";
import { Service } from "../service/index.js";
import TeamList from "../components/team/TeamList.js";

export const TeamApp = class extends Subject {
  $target;

  constructor(target) {
    super();
    this._service = new Service();
    this.$target = target;
    this.setup();
  }

  async setup() {
    const teams = await this._service.getTeams();
    this.setState({ teams });
    this.addObservers(new TeamList(this.$target, this));
    this.notify();
  }
};

new TeamApp(document.querySelector(".team-list-container"));
