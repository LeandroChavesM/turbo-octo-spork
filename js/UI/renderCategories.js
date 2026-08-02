import { gameData } from "../data/gameData.js";
const app = document.querySelector("#app");

const lista = document.createElement("ul");

function mostrar() {
  for (let i of gameData.regions) {
    app.appendChild(lista);
    let regiao = document.createElement("li");
    regiao.textContent = i.name;
    lista.appendChild(regiao);
  }
}

export default mostrar;
