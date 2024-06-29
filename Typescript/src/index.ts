interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}
//pick help to create new typr from existing type selecting some keys from it

type UserProfile = Pick<User, "name" | "email">;

const profile = (user: UserProfile) => {
  console.log(`${user.name} and ${user.email}`);
};
 
//partial 
//it use same type but marked all optional to its all properties 
 
type Updateprops = Pick<User,'name'|'email'>  
type updateoptional =Partial<Updateprops>
  
function update (u:updateoptional){
  console.log(u);
}
 
update({name:"r"}) 

//Readonly 
//making it readonly configuration then object property will not change  

interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
}; 
//config.apiKey='llll';->error:connot assign because of readonly ->this is a complile time checking  while const is run time checking 
 

//----Record 
//it give cleaner type to objects 
interface people{
  id:string ; 
  name:string ; 
} 
type Peoples ={[key : string ]:people}  

const userr:Peoples ={
  'abcdd':{id:'iii',name:"ji0erdjf"}
} 
 //or can use record 
 type Userss = Record<string, people>;

const userss: Userss = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(userss['abc123']);  

// map gives fancier way to deal with objects 
const usermap = new Map<string , people>() ; 
usermap.set('abc' ,{id:'j0ij0',name:'john'}) ; 
console.log(usermap.get('abc')) 

 
//exclude
 //if want exclude from some types from being passe
type Eventt = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Eventt, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK