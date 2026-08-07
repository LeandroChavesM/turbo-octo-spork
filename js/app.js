import desenharAchievements from "./UI/renderAchievements.js";
import desenharLista from "./UI/renderCategories.js";
import { gameData } from "./data/gameData.js";
import { state } from "./state.js";

const sidebar = document.querySelector("#sidebar");
const mainContainer = document.querySelector("#main-container");
const data = gameData.regions;

desenharLista(sidebar, data);

function renderInterface() {
  
    desenharAchievements(mainContainer);
  
}

export default renderInterface;
