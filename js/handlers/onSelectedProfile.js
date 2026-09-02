import { state } from "../state.js";

function onSelectedProfile(item, object, callback) {
  item.addEventListener("click", () => {
    state.currentProfile = object;
    callback();
  });
}

export default onSelectedProfile;
