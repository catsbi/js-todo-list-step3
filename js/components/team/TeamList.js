import { Observer } from "../../observer/Observer.js";
import TeamCardFactoryImpl from "../../factory/team/TeamCardFactoryImpl.js";

export const TeamList = class extends Observer {
  constructor(target, subject) {
    super(target, subject);
  }

  get state() {
    return this._state;
  }

  setState(subject) {
    const { teams } = subject._state;
    super.setState({ teams });
    this.render();
  }

  render() {
    this._target.innerHTML = "";
    for (let team of this._state.teams) {
      let teamCard = new TeamCardFactoryImpl(team);
      this._target.append(teamCard.build());
    }
    this._target.append(TeamCardFactoryImpl.createAddButton());
  }

  setEvent() {}
};

export default TeamList;
