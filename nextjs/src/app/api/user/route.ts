import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const client=new PrismaClient()
export async function GET(){
  const user = await client.user.findMany({});
  console.log(user)
  return NextResponse.json({username:user}) ;
} 
export async function POST(req:NextRequest){
const body=await req.json(); 
try{
  const user = await client.user.create({
    data:{
      username:body.username 
      ,
      password:body.password
    }
  }) 
  console.log(user.id); 
  return NextResponse.json({msg:"signed up"})
}catch(e){
  return NextResponse.json({msgg:e})
}
}