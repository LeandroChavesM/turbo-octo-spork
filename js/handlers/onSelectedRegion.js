  import { state } from "../state.js";

function onSelectedRegion(item, object, callback) {
  item.addEventListener("click", () => {
    state.currentRegion = object.id;
    callback();
  });
}

export default onSelectedRegion;
