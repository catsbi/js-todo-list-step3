export const AbstTodoListFactory = class {
  template;

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
