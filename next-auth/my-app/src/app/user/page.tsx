
import { getServerSession } from "next-auth"

const   page= async()=>{
  const session = await getServerSession();

  return (
    <div>
    hii 
    {JSON.stringify(session)} 
    
  </div>
  )
}

export default page
