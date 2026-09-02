import { userData } from "../data/userData.js";
import onSelectedProfile from "../handlers/onSelectedProfile.js";

function renderProfile(lugar, callback) {
  const lista = document.createElement("ul");
  lugar.appendChild(lista);
  for (let profile in userData.profiles) {
    let item = document.createElement("li");
    onSelectedProfile(item, profile, callback);
    item.textContent = userData.profiles[profile].name;
    item.style.cursor = "pointer";
    lista.appendChild(item);
  }
}

export default renderProfile;
