// interface Game{
//   id:string ; 
//   whiteplayer:string ; 
//   blackplayer:string ;  
//   move:string []; 
// }

interface Game{
  id:string ; 
  whiteplayer:string ; 
  blackplayer:string ; 
  moves:string [];
} 
export class GameManager{
  //IMPROVE 
  //PRIVATE INSTnce
  private static instance: GameManager;
  games:Game[]=[]; 
  
  //
  private constructor(){
    this.games=[];
  }
  public static getInstance(): GameManager {
    if (!GameManager.instance) {
        GameManager.instance = new GameManager();
    }
    return GameManager.instance;
}
  public addgame(game:Game){
    this.games.push(game);
  } 
  public getgames(){
console.log(this.games) ; 
  } 
  public addmove(id:string , move:string){
    const game=this.games.find(game=>game.id==id); 
    if(game){
      game.moves.push(move);
    }
  } 
  public logstate(){
    console.log(this.games);
  }
}
