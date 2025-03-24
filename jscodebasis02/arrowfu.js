////////ARROW FUN//////
const user = {
    username : "sanjay",
    price : 636 ,

    welcomemessage:function(){
        console.log(`${this.username}`,"welcome to website");
        //console.log(this)
        
    }
}
// user.welcomemessage()
// user.username = "thakur"
// user.welcomemessage()

// function funarr(){  in this case context not working in function 
//     let username = "sanjay"
//     console.log(this);
// }
// funarr()

// const chai = function(){
//     let username = "sanjay"
//        console.log(this.username);
// }
// chai()

// const chai = () =>{
//     let username = "sanjay"
//        console.log(this.username);
// }
// chai()

// const addone = (number1, number2) => {  ////bassic run arrow function//
//     return number1 + number2
// }
// console.log(addone(5,5));

/////onemore trick arrow fun run
const addone = (number1, number2) => (number1 + number2);
//console.log(addone(5,5));

// function chsi(){
//     console.log('DB CONNECTED')
// }
// chsi();

(function chsi(){
    console.log('DB CONNECTED')
})();

( (name) =>{
    console.log(`DB CONNECTED three ${name}`)
})('sanjay');

let newfunction = () =>{
    console.log("komal");
}
console.log(newfunction());


