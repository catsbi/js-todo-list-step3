export const AbstTodoListFactory = class {
  template;state;
  constructor(state) {
    this.state = state;
  }

  frame() {}
  title() {}
  input() {}
  body() {}
  build() {
    this.frame();
    this.title();
    this.input();
    this.body();

    return this.template;
  }
};
