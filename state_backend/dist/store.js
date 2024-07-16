"use strict";
// interface Game{
//   id:string ; 
//   whiteplayer:string ; 
//   blackplayer:string ;  
//   move:string []; 
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
class GameManager {
    //
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstance() {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }
    addgame(game) {
        this.games.push(game);
    }
    getgames() {
        console.log(this.games);
    }
    addmove(id, move) {
        const game = this.games.find(game => game.id == id);
        if (game) {
            game.moves.push(move);
        }
    }
    logstate() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
