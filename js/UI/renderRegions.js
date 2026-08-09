import { gameData } from "../data/gameData.js";
import renderList from "./renderList.js";

function renderRegions(lugar, callback) {
  const data = gameData.regions;

  renderList(lugar, data, callback);
}

export default renderRegions;
