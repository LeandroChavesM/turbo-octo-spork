import handleSelectedItem from "../handlers/selectedItem.js";

function renderList(lugar, data, callback) {
  const lista = document.createElement("ul");
  lugar.appendChild(lista);
  for (let i of data) {
    let item = document.createElement("li");
    handleSelectedItem(item, i, callback);
    item.textContent = i.name;
    item.style.cursor = "pointer";
    lista.appendChild(item);
  }
}

export default renderList;
