export const stringToHTML = (string) => {
  const $div = document.createElement("div");

  $div.innerHTML = string;
  return $div.children[0];
};
