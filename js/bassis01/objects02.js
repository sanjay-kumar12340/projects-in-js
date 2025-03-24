//////////array part02////////////
//const tinderuser = new Object()
const tinderuser = {}
 tinderuser.userId = "san1234",
 tinderuser.name = "jhoncina",
 tinderuser.isloggedIn = true;

// console.log(tinderuser);

//objects in objects//
const regularuser = {
    email:"san@gmail.com",
    fulname:{
        userfullname:{
            firstname:"sanjay",
            lastname:"thakur",
        }

    }
}
//console.log(regularuser.fulname.userfullname.firstname);

///in OBJECT object values marge same way as ARRAY
const obj01 = {1:'a' , 2:'b'}
const obj02 = {3:'a' , 4:'b'}
const obj03 = {5:'a', 6:'b'} 

//console.log(obj01, obj02, obj03); //in one line linewise object show
//const obj04 = Object.assign({},obj01,obj02,obj03);
const obj04 = {...obj01, ...obj02, ...obj03}; //spred marging method easy and most useble
//console.log(obj04);

//jdo database to values onn gia
const user = [
    {
        Id:1,
        email:'sa12@gmail.com',
    },
    {
        Id:2,
        email:'sa12@gmail.com',
    },
    {
        Id:3,
        email:'sa12@gmail.com',
    },
]

// user[1].email
// console.log(tinderuser)
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser)); 
// console.log(Object.entries(tinderuser)); //ek ek value nu array vich convert
// console.log(tinderuser.hasOwnProperty('isloggedIn')); //jdo code vich koi property chweck krni hove b hagi a k na

/// in  object de-structuring//
const course = {
    coursename:"java-script",
    price:999,
    courseInstructor:"sanjay",

}
const {price}  = course
console.log(price);
