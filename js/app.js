import renderAchievements from "./UI/renderAchievements.js";
import renderObjectives from "./UI/renderObjectives.js";
import renderRegions from "./UI/renderRegions.js";
import { loadUserData } from "./services/storage.js";

import onCheckboxCheck from "./handlers/onCheckboxCheck.js";

const sidebar = document.querySelector("#sidebar");
const mainContainer = document.querySelector("#main-container");
const objContainer = document.querySelector("#obj-container");

loadUserData();

renderRegions(sidebar, updateInterface);

function updateInterface() {
  renderAchievements(mainContainer, updateInterface);
  renderObjectives(objContainer, onCheckboxCheck);
}

export default updateInterface;
