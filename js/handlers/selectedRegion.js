import { state } from "../state.js";
import renderInterface from "../app.js";

function handleSelectedRegion(item, region) {
  item.addEventListener("click", () => {
    state.currentRegion = region.id;
    renderInterface();
  });
}

export default handleSelectedRegion;
