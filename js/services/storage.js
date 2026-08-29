import { userData } from "../data/userData.js";

export function saveUserData() {
  localStorage.setItem("userData", JSON.stringify(userData));
}

export function loadUserData() {
  const saved = JSON.parse(localStorage.getItem("userData"));
  if (saved) {
    userData.objectives = saved.objectives;
  }
}
