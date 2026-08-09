import { state } from "../state.js";

function handleSelectedItem(item, object, callback) {
  item.addEventListener("click", () => {
    state.currentRegion = object.id;
    callback();
  });
}

export default handleSelectedItem;
