"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
const games = store_1.GameManager.getInstance();
function startLogger() {
    setInterval(() => {
        games.logstate();
    }, 4000);
}
exports.startLogger = startLogger;
