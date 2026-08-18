import { gameData } from "../data/gameData.js";
import renderList from "./renderList.js";
import onSelectedRegion from "../handlers/onSelectedRegion.js";

function renderRegions(lugar, callback) {
  const data = gameData.regions;
  renderList(lugar, data, onSelectedRegion, callback);
}

export default renderRegions;
