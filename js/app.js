import renderAchievements from "./UI/renderAchievements.js";
import renderObjectives from "./UI/renderObjectives.js";
import renderRegions from "./UI/renderRegions.js";

import onCheckboxCheck from "./handlers/onCheckboxCheck.js";

const sidebar = document.querySelector("#sidebar");
const mainContainer = document.querySelector("#main-container");
const objContainer = document.querySelector("#obj-container");

renderRegions(sidebar, updateInterface);

function updateInterface() {
  renderAchievements(mainContainer, updateInterface);
  renderObjectives(objContainer, onCheckboxCheck);
}

export default updateInterface;
