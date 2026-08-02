function desenharLista(lugar, data) {
  const lista = document.createElement("ul");
  lugar.appendChild(lista);
  for (let i of data) {
    let item = document.createElement("li");
    item.textContent = i.name;
    lista.appendChild(item);
  }
}

export default desenharLista;
