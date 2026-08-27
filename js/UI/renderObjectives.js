import { gameData } from "../data/gameData.js";
import onCheckboxCheck from "../handlers/onCheckboxCheck.js";
import { state } from "../state.js";

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
          console.log(j.id);
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          let item = document.createElement("li");
          onCheckboxCheck(checkbox, j.id);
          item.textContent = i.name;
          item.style.cursor = "pointer";
          lista.appendChild(item);
          lista.appendChild(checkbox);
        }
      }
    }
  }
}

export default renderObjectives;
