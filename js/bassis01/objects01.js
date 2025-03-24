///////////////OBJECTS///////////
//objects literals//
const mysymb = Symbol('key1')

const user = {
    Name: "sanjay",
    Age: 18,
    [mysymb]: 'mykey1',
    "full-name":"sanjay",
    Email: "sanjay@google.com",
    location: "patiala",
    Isloggedin: false,
    Lastlogindays: ["monday",  "saturday"]
}
console.log(user["Email"]); //update way
//console.log(user.Age); //norml way
//console.log(user);
console.log(user["full-name"]);

//console.log(typeof mysymb);
//console.log(user[mysymb]);
user.Email = "sanjaythakur@gmail.com"
//console.log(user);

//function use in Object={}
user.greeting = function(){
    console.log("halo JS user"); //function run in object in bassic way 
}

user.greetingftwo = function(){
    console.log(`halo JS user, ${this.Name}`);   //this way run function (string interpulation) es vich asi kise v key di value nu fill kra skde a
}

user.greeting()
user.greetingftwo()
