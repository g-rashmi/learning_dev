import {useEffect,useState} from "react"
 


function App() { 
const [socket,setSocket]=useState<WebSocket|null>(null) ; 
const[m,setM]=useState([]);
useEffect(()=>{
const newsocket = new WebSocket("ws://localhost:8080") ; 
newsocket.onopen=()=>{
  console.log("connection establish") ; 
  newsocket.send("hello server") 
}
newsocket.onmessage=(message)=>{
  console.log("message received:",message.data); 
  setM(message.data);
}
setSocket(newsocket); 

},[])

  return (
    <div>
      hiii 
      {m}
    </div>
  )
}

export default App
