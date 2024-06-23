"use strict";
const profile = (user) => {
    console.log(`${user.name} and ${user.email}`);
};
function update(u) { 
    console.log(u);
}
update({ name: "r" });
profile({name:"hh",age:19})