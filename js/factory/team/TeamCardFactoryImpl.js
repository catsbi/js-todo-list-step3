import { stringToHTML } from "../../utils/index.js";
import { AbstTodoListFactory } from "../AbstTodoListFactory.js";

export const TeamCardFactoryImpl = class extends AbstTodoListFactory {
  frame() {
    this.template = stringToHTML(` <div class="team-card-container"></div>`);
  }

  body() {
    this.template.appendChild(
      stringToHTML(`
        <a href="/kanban.html?team-id=${this.state._id}" class="card">
          <div class="card-title">
            ${this.state.name}
          </div>
        </a>
      `)
    );
  }

  static createAddButton() {
    return stringToHTML(`
      <div class="team-list-container">
        <div class="add-team-button-container">
          <button id="add-team-button" class="ripple">
            <span class="material-icons">add</span>
          </button>
        </div>
      </div>
    `);
  }
};

export default TeamCardFactoryImpl;
