import { stringToHTML } from "../../utils/index.js";
import AbstTodoListFactory from "../AbstTodoListFactory.js";

export const TeamCardFactoryImpl = class extends AbstTodoListFactory {
  frame() {
    this.template = stringToHTML(` <div class="team-card-container"></div>`);
  }
  body() {
    this.template.appendChild(
      stringToHTML(`
        <a href="/kanban.html?team-id=${this.state.teamId}" class="card">
          <div class="card-title">
            ${this.state.teamName}
          </div>
        </a>
      `)
    );
  }
};
