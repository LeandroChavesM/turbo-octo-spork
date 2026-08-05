import { state } from "../state.js";
import { gameData } from "../data/gameData.js";

const data = gameData.regions;

function handleSelectedRegion(item) {
  item.addEventListener("click", () => {
    for (let i of data) {
      if (item === i.name) state.currentRegion = i.id;
    }
  });
}

export default handleSelectedRegion;
