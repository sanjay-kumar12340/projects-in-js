////FUNCTION/////

// function myfunction()  {
//     console.log("S");
//     console.log("A");
//     console.log("N");
//     console.log("J");
//     console.log("A");
//     console.log("Y");
    
// }
// myfunction()

// function add(number1, number2 ){
//     console.log(number1 + number2)

// }
add(5, "4"); //eithe asi jekr ek nu string ch likhde ha ta js duje nu v string ch smj lemdi hai ess li outout hor ondi hai
add(8,7);

function add(number1, number2 ){
//let result = number1 + number2 //with variable call function
  //return result
  return number1 + number2  //or is vich lod nhi let variable lenn di
}
const result = add(5,4)
//console.log("result:" , result);

function userloginmessege(user){  //if we directr  value in this ta if statement code di lod ni hundi te na kde value undefined ave 
    // if(user === undefined){
    //     console.log("please enter user name");
    //     return
    // }
    return `${user} just logged In`
}
//console.log(userloginmessege("sanjay "));
//console.log(userloginmessege());

function calculatecardprice(...number1){ //jo a ... han ena nu rest opator bolya jnda ena nu hi spred optertor but a use sitution de hisab nal hunde han
    return number1
}
//console.log(calculatecardprice(200,400,500,2000));

//Object in function
const user = {
    username:"sanjay",
    price:554

}
function runobjectfunc(anyobject){
console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
}
runobjectfunc(user)

//array in function
const myarray = [200,100,500,400,666]
 function arrayvaluerun(calarray){
    return calarray[4]
 
 }
console.log(arrayvaluerun(myarray));
//console.log([200,100,500,400,666]);
