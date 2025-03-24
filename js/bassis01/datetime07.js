/////////////dates///////////////

let MyDate = new Date()
// console.log(MyDate.toLocaleString()); //date proto method ehh ky tra de han
// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleDateString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toTimeString());

//jdo app date create krni hove then//
let createDateself = new Date(2025, 0, 2, 18, 10);
// console.log(createDateself.toLocaleString());

// let yycreatedate = new Date("01-02-2025");  //when we create yy/mm date time show//
// console.log(yycreatedate.toLocaleString());

// let mytimestepm = Date.now() //is vich output milisecond vich mildi hai
// console.log(mytimestepm);

// console.log(createDateself.getTime());
// console.log(Math.round(Date.now()/1000))

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());

