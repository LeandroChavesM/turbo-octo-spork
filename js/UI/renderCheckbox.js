function renderCheckboxItem(lugar, objective, callback) {
  let item = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  item.textContent = objective.name;
  callback(checkbox, objective.id);
  item.addEventListener("click", () => {
    if (event.target !== checkbox) {
      checkbox.click();
    }
  });
  item.appendChild(checkbox);
  lugar.appendChild(item);
}

export default renderCheckboxItem;
