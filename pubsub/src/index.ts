import { PubSubManager } from "./pubsub";

setInterval(() => {
    PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
    
}, 5000)
