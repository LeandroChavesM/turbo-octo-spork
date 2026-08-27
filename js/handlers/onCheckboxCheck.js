import { userData } from "../data/userData.js";

function onCheckboxCheck(checkbox, objective) {
  checkbox.addEventListener("click", () => {
    for (let achievements of userData.achievements) {
      if (achievements.id === objective) {
        console.log(achievements)
        
        for (let objectives of achievements.objectives) {
          for (let obj in objectives){
            console.log(obj, objectives[obj].status)
          }
          
        }
      }
    }
  });
}

export default onCheckboxCheck;
