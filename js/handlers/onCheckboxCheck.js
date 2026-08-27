import { userData } from "../data/userData.js";

function onCheckboxCheck(checkbox, objective) {
  if (userData.objectives[objective].status === "completed") {
    checkbox.checked = true;
  }
  
  userData.objectives[objective] = { status: "pending" };

  checkbox.addEventListener("change", () => {
    userData.objectives[objective] = checkbox.checked
      ? { status: "completed" }
      : { status: "pending" };
  });
}

export default onCheckboxCheck;
