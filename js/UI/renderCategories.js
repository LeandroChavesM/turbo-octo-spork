import handleSelectedRegion from "../handlers/selectedRegion.js";

function desenharLista(lugar, data) {
  const lista = document.createElement("ul");
  lugar.appendChild(lista);
  for (let i of data) {
    let item = document.createElement("li");
    handleSelectedRegion(item, i);
    item.textContent = i.name;
    item.style.cursor = "pointer";
    lista.appendChild(item);
  }
}

export default desenharLista;
