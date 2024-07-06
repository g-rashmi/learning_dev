import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials:any) { 
          const username =  credentials.username; 
          const password= credentials.password
            //logic to check user present or not 
            return {
                id: "user1",
                lastname:"hhhhhi",username:"hiii",email:"jdepid0e-id"
                
            };
        },
      })
      ,
      GoogleProvider({
        clientId: process.env.CLIENT_ID||"",
        clientSecret: process.env.CLIENT_SECRET||""
      })
  ], secret: process.env.NEXTAUTH_SECRET

})

export { handler as GET, handler as POST }