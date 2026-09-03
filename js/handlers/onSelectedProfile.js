import { state } from "../state.js";

function onSelectedProfile(item, object, callback) {
  item.addEventListener("click", () => {
    const key = typeof object === "object" ? object.key : object;
    state.currentProfile = key;
    callback();
  });
}

export default onSelectedProfile;
