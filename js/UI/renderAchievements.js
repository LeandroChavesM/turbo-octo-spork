import { gameData } from "../data/gameData.js";
import renderList from "./renderCategories.js";
import { state } from "../state.js";

const data = gameData.regions;

function renderAchievements(lugar) {
  for (let i of data) {
    console.log(state.currentRegion);
    if (state.currentRegion === i.id) {
      let ach = i.achievements;
      lugar.innerHTML = "";
      if (ach) {
        renderList(lugar, ach);
      }
    }
  }
}

export default renderAchievements;
