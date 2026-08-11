import { gameData } from "../data/gameData.js";
import onSelectedAchievement from "../handlers/onSelectedAchievement.js";
import renderList from "./renderList.js";

const data = gameData.regions;

function renderObjectives(lugar) {
  lugar.innerHTML = "";
  for (let i of data) {
    for (let j of i.achievements) {
      let obj = j.objectives;

      renderList(lugar, obj, onSelectedAchievement, () => {});
    }
  }
}

export default renderObjectives;
