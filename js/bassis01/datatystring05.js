// string datatype
let Name = "sanjay"
let Myscore =  50

//console.log(Name +  Myscore + " final"); but it is old way of excute code its not wrong it working   now is update style run code 

// console.log(`Hello My Name is ${Name} and my repo rate${repo}`)

// one more way string write code 
 const sequdegame = new String('sanjay');
//  some prototype mathod of string
  console.log(sequdegame[0]); //is vich length de according jinva v number add krde h onva text show keys axis krn li//
  console.log(sequdegame.__proto__);  //{}is nal eh object show bhot sare but ave es di ave likhn di od nhi hundi assi direct google consolete ja dekhnskde ha//

  console.log(sequdegame.toLocaleUpperCase());
  console.log(sequdegame.length);
  console.log(sequdegame.indexOf('j'));

//stringn prototype methods (functions)

//   const newstring = sequdegame.substring(0, 4);
//   console.log(newstring);

   const otherstring  = sequdegame.slice(-6, 4);
   console.log(otherstring);

   let anotherstring = "    sanjay    "
   console.log(anotherstring);
   console.log(anotherstring.trim());

   const url = "https://sanjay@1254.com/blogs%20sanjay@.com"
   console.log(url.replace('%20', '-'));

   console.log(url.includes('sanjay'));

   let str = "apple banana grapes"
   let fruit = str.split(" ")
   console.log(fruit);


// let fname = "komal" ;
// let age = 20 ;
//    console.log(`Hello My Name is ${fname} and my repo rate ${age}`); new style backticks of string interpulation

   
   
   


   
  
  
