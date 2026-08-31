import { userData } from "../data/userData.js";
import { saveUserData } from "../services/storage.js";
import getCurrentProfile from "../services/getCurrentProfile.js";

function onCheckboxCheck(checkbox, objective) {
  if (!getCurrentProfile().objectives[objective]) {
    getCurrentProfile().objectives[objective] = { status: "pending" };
  }

  if (getCurrentProfile().objectives[objective].status === "completed") {
    checkbox.checked = true;
  }

  checkbox.addEventListener("change", () => {
    getCurrentProfile().objectives[objective] = checkbox.checked
      ? { status: "completed" }
      : { status: "pending" };
    saveUserData();
  });
}

export default onCheckboxCheck;
