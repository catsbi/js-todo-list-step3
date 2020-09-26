import { stringToHTML } from "../../utils/index.js";
import AbstTodoListFactory from "../AbstTodoListFactory.js";

export const TodoListFactoryImpl = class extends AbstTodoListFactory {
  frame() {
    this.template = stringToHTML(`<li class="todoapp-container"></li>`);
  }
  title() {}
  input() {}
  body() {}
};
