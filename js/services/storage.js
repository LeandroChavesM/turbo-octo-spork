import { userData } from "../data/userData.js";
import getCurrentProfile from "./getCurrentProfile.js";
import { state } from "../state.js";

export function saveUserData() {
  localStorage.setItem("userData", JSON.stringify(userData));
}

export function loadUserData() {
  const saved = JSON.parse(localStorage.getItem("userData"));
  if (saved) {
    getCurrentProfile().objectives =
      saved.profiles[state.currentProfile].objectives;
  }
}
