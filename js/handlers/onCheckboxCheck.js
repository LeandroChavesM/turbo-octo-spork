import { userData } from "../data/userData.js";

function onCheckboxCheck(checkbox, objective) {
  checkbox.addEventListener("change", () => {
    console.log(userData.objectives[objective.id]);
  });
}

export default onCheckboxCheck;
