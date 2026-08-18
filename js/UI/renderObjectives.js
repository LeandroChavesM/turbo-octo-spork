import { gameData } from "../data/gameData.js";
import renderList from "./renderList.js";
import { state } from "../state.js";

const data = gameData.regions;

function renderObjectives(lugar) {
  lugar.innerHTML = "";
  for (let i of data) {
    for (let j of i.achievements) {
      if (state.currentAchievement === j.id) {
        let obj = j.objectives;
        renderList(
          lugar,
          obj,
          () => {},
          () => {}
        );
      } 
    }
  }
}

export default renderObjectives;
