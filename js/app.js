import renderAchievements from "./UI/renderAchievements.js";
import renderRegions from "./UI/renderRegions.js";

const sidebar = document.querySelector("#sidebar");
const mainContainer = document.querySelector("#main-container");

renderRegions(sidebar, updateInterface);

function updateInterface() {
  renderAchievements(mainContainer);
}

export default updateInterface;
