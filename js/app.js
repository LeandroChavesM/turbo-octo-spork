import desenharAchievements from "./UI/renderAchievements.js";
import desenharLista from "./UI/renderCategories.js";
import { gameData } from "./data/gameData.js";

const sidebar = document.querySelector("#sidebar");
const data = gameData.regions;

desenharLista(sidebar, data);
desenharAchievements();
