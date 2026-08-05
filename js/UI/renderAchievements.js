import { gameData } from "../data/gameData.js";
import desenharLista from "./renderCategories.js";
import { state } from "../state.js";

const currentRegion = state.currentRegion
const data = gameData.regions

function desenharAchievements(){

    for (let i of data){
            let ach = i.achievements
            
            desenharLista(currentRegion,ach)
    }
}

export default desenharAchievements