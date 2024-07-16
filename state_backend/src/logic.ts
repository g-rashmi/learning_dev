import { GameManager} from "./store";
const games=GameManager.getInstance()
export function startLogger() {
  setInterval(() => {
      games.logstate();
    
  }, 4000) 
}