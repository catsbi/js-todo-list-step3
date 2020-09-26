import RestClinetAdapter from "../apiclient/RestClientAdapter.js";

export const Service = class {
  #restClient;

  constructor() {
    this.#restClient = new RestClinetAdapter();
  }

  //1. 팀추가
  addTeam(name) {
    return this.#restClient.post("/teams", { name });
  }
  //2. 팀 불러오기
  getTeam(teamId) {
    return this.#restClient.get(`/teams/${teamId}`);
  }

  //3. 팀 리스트 불러오기
  getTeams() {
    return this.#restClient.get(`/teams/`);
  }

  //4.팀 삭제
  deleteTeam(teamId){
    return this.#restClient.delete(`/teams/${teamId}/members`);
  }

  //5. 팀원별 TodoList 불러오기
  getTodoListByMember(teamId, memberId) {
    return this.#restClient.get(`/teams/${teamId}/members/${memberId}`);
  }

  //6. 팀원의 TodoItem 추가하기
  addTodoItemByMember(teamId, memberId, contents) {
    return this.#restClient.post(`/teams/${teamId}/members/${memberId}/items`, { contents });
  }

  //7. 팀원의 TodoItem 삭제하기
  deleteTodoItemByMember(teamId, memberId, itemId) {
    return this.#restClient.delete(`/teams/${teamId}/members/${memberId}/items/${itemId}`);
  }

  //8. 팀원의 TodoItem toggle하기
  toggleTodoItemByMember(teamId, memberId, itemId) {
    return this.#restClient.put(`/teams/${teamId}/members/${memberId}/items/${itemId}/toggle`);
  }
  //9. 팀원의 TodoItem contents 수정하기
  modifyTodoItemContentsByMember(teamId, memberId, itemId, contents) {
    return this.#restClient.put(`/teams/${teamId}/members/${memberId}/items/${itemId}`, {contents});
  }

  //10. 팀원의 TodoItem 우선순위 정하기
  modifyTodoItemPriorityByMember(teamId, memberId, itemId, priority) {
    return this.#restClient.put(`/teams/${teamId}/members/${memberId}/items/${itemId}/priority`, {priority});
  }

  //1. 팀원의 TodoItem 전부 삭제
  clearTodoItemByMember(teamId, memberId) {
    return this.#restClient.delete(`/teams/${teamId}/members/${memberId}/items/`);
  }

};
