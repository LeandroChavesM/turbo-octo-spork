import { gameData } from "../data/gameData.js";
import desenharLista from "./renderCategories.js";
import { state } from "../state.js";

const data = gameData.regions;

function desenharAchievements(lugar) {
  for (let i of data) {
    console.log(state.currentRegion);
    if (state.currentRegion === i.id) {
      let ach = i.achievements;
      lugar.innerHTML = "";
      if (ach) {
        desenharLista(lugar, ach);
      }
    }
  }
}

export default desenharAchievements;
