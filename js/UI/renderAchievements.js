import { gameData } from "../data/gameData.js";
import desenharLista from "./renderCategories.js";
import { state } from "../state.js";

const currentRegion = state.currentRegion;
const data = gameData.regions;

function desenharAchievements(lugar) {
  for (let i of data) {
    console.log(state.currentRegion);
    if (state.currentRegion === i.id) {
      let ach = i.achievements;
      desenharLista(lugar, ach);
    }
  }
}

export default desenharAchievements;
