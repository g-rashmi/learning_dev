"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logic_1 = require("./logic");
(0, logic_1.startLogger)();
const games = store_1.GameManager.getInstance();
setInterval(() => {
    games.addgame({
        id: "1",
        whiteplayer: "hii",
        blackplayer: "heelo",
        moves: ["hii"]
    });
}, 5000);
