import { userData } from "../data/userData.js";

import onSelectedProfile from "../handlers/onSelectedProfile.js";

import renderList from "./renderList.js";

function renderProfile(lugar, callback) {
  const profiles = Object.entries(userData.profiles).map(([chave, valor]) => {
    return { key: [chave], name: valor.name };
  });

  renderList(lugar, profiles, onSelectedProfile, callback);
}

export default renderProfile;
