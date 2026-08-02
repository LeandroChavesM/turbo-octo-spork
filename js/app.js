import desenharLista from "./UI/renderCategories.js";
import { gameData } from "./data/gameData.js";

const app = document.querySelector("#app");
const data = gameData.regions;

desenharLista(app, data, name);
