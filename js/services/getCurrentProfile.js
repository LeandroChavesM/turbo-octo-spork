import { userData } from "../data/userData.js";
import { state } from "../state.js";

function getCurrentProfile() {
  return userData.profiles[state.currentProfile];
}

export default getCurrentProfile;
