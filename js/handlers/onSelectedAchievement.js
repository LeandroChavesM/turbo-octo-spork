import { state } from "../state.js";

function onSelectedAchievement(item, object, callback) {
  item.addEventListener("click", () => {
    state.currentAchievement = object.id;
    callback();
  });
}

export default onSelectedAchievement;
