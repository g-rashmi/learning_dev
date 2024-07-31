const  express =require( "express" )
const cluster=require("cluster")
const os=require("os"); 
const totalcpu=os.cpus().length

const port=3000;
const app=express()
if (cluster.isPrimary) {
  console.log(`Number of CPUs is ${totalcpu}`);
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalcpu; i++) {
    cluster.fork();
  } 

  cluster.on("exit",(worker,code,signal)=>{
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  })
}else {
  const app = express();
  console.log(`Worker ${process.pid} started`);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/api/:n", function (req, res) {
    let n = parseInt(req.params.n);
    let count = 0;

    if (n > 5000000000) n = 5000000000;

    for (let i = 0; i <= n; i++) {
      count += i;
    }

    res.send(`Final count is ${count} ${process.pid}`);
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}