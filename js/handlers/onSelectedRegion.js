import { state } from "../state.js";

function onSelectedRegion(item, object, callback) {
  item.addEventListener("click", () => {
    state.currentRegion = object.id;
    state.currentAchievement = "";
    callback();
  });
}

export default onSelectedRegion;
