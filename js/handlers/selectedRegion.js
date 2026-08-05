import { state } from "../state.js";

function handleSelectedRegion(item, region) {
  item.addEventListener("click", () => {
    state.currentRegion = region.id;
    window.location.reload;
  });
}

export default handleSelectedRegion;
