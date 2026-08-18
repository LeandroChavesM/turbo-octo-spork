function renderList(lugar, data, callback, callback2) {
  const lista = document.createElement("ul");
  lugar.appendChild(lista);
  for (let i of data) {
    let item = document.createElement("li");
    callback(item, i, callback2);
    item.textContent = i.name;
    item.style.cursor = "pointer";
    lista.appendChild(item);
  }
}

export default renderList;
