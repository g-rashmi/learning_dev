const  express =require( "express" )
const cluster=require("cluster")
const os=require("os"); 
const totalcpu=os.cpus().length

const port=3000;
const app=express()
 
app.listen(port, () => {
  console.log(totalcpu)
  console.log(`App listening on port ${port}`);
});