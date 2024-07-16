import { GameManager} from "./store";
import { startLogger } from "./logic"; 
startLogger();

const games=GameManager.getInstance();
setInterval(() => {
    games.addgame({
      id:"1",
      whiteplayer:"hii" ,
      blackplayer:"heelo" ,  
      moves: ["hii"] 
    })
}, 5000) 
