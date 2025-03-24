//symbol deffina

// const id = symbol('123')
// const anotherId = symbol('123')

//  console.log(id === anotherId);

 const id = Symbol('123')
 const anotherId = Symbol('123')

console.log(id === anotherId); 

//Array, object, function,

const heros = ["shaktiman","uniergy", "shaklakboom"];

// objects
let myobj = {
    name: "sanjay",
    age: 24,

}
// function
const myfunction = function(){
    console.log("hallo world");
}



// ****************************************************
// meomery work and its type

//stack (premitive) Heap (non-premitive) used are
// in stack origenal value not change but make change top change  copy file
// ib heap not make copy file its origenal value real time change

let MyName = "sanjayThakur"
let anotherName = MyName
anotherName = "sanjaykumar"
console.log(anotherName);
console.log(MyName);

 //heap
 let userone = {
    Email: "user@googl.com",
    upi: "user@ybbj"
 }
   let usertwo = userone
   
  usertwo.Email = "sanjay@gmail.com,";
  console.log(userone.Email);
  console.log(usertwo.Email);



