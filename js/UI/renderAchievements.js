import { gameData } from "../data/gameData.js";
import renderList from "./renderList.js";
import { state } from "../state.js";
import onSelectedAchievement from "../handlers/onSelectedAchievement.js";

const data = gameData.regions;

function renderAchievements(lugar) {
  for (let i of data) {
    if (state.currentRegion === i.id) {
      let ach = i.achievements;
      lugar.innerHTML = "";
      if (ach) {
        renderList(lugar, ach, onSelectedAchievement, () => {});
      }
    }
  }
}

export default renderAchievements;
