import renderAchievements from "./UI/renderAchievements.js";
import renderList from "./UI/renderCategories.js";
import { gameData } from "./data/gameData.js";
import { state } from "./state.js";

const sidebar = document.querySelector("#sidebar");
const mainContainer = document.querySelector("#main-container");
const data = gameData.regions;

renderList(sidebar, data);

function renderInterface() {
  renderAchievements(mainContainer);
}

export default renderInterface;
