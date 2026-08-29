import { userData } from "../data/userData.js";
import { saveUserData } from "../services/storage.js";

function onCheckboxCheck(checkbox, objective) {
  if (!userData.objectives[objective]) {
    userData.objectives[objective] = { status: "pending" };
  }

  if (userData.objectives[objective].status === "completed") {
    checkbox.checked = true;
  }

  checkbox.addEventListener("change", () => {
    userData.objectives[objective] = checkbox.checked
      ? { status: "completed" }
      : { status: "pending" };
    saveUserData();
  });
}

export default onCheckboxCheck;
