import { userData } from "../data/userData.js";

function createProfile(name) {
  const objKeyProfile = Object.keys(userData.profiles);
  const key = `profile-${objKeyProfile.length}`;

  const objectivesReseted = Object.entries(
    userData.profiles.default.objectives
  ).map(([chave, _]) => {
    return [chave, { status: "pending" }];
  });

  const arrayToObject = Object.fromEntries(objectivesReseted);

  userData.profiles[key] = {
    name,
    objectives: arrayToObject,
  };

  console.log(userData.profiles);
  
}

export default createProfile;
