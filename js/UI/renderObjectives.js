import { gameData } from "../data/gameData.js";
import { state } from "../state.js";
import renderCheckboxItem from "./renderCheckbox.js";

const data = gameData.regions;

function renderObjectives(lugar, callback) {
  lugar.innerHTML = "";
  for (let i of data) {
    for (let j of i.achievements) {
      if (state.currentAchievement === j.id) {
        let obj = j.objectives;

        const lista = document.createElement("ul");
        lugar.appendChild(lista);
        for (let i of obj) {
          renderCheckboxItem(lista, i, callback);
        }
      }
    }
  }
}

export default renderObjectives;
