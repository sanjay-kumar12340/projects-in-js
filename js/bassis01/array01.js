//Array
const myarray = [1,2,3,4,5];
//console.log(myarray);

const arraycount = new Array(0,1,2,3,4,5);
//console.log(arraycount[1])

// array mathods//////

// arraycount.push(6) add elementt 
// console.log(arraycount);
//arraycount.pop() last elelemnt remove
//console.log(arraycount);

//arraycount.shift() //remove first element
//console.log(arraycount);
 
//arraycount.unshift(10) //add start elelment 
//console.log(arraycount);

// const newarr = arraycount.join()
//  console.log( typeof newarr);
//  console.log( typeof arraycount);

//slice and splice//
// console.log('A ',arraycount)

// const myar1 = arraycount.slice(1, 3)
// console.log(myar1);

// console.log('B ',arraycount)

// const myar2 = arraycount.splice(1, 3)
// console.log('C ',arraycount)
// console.log(myar2);

///////////array part 02//////////// ITS ALL ARRY METHOD USED 
const marvel_heros = ['superman', 'batman', 'satrange', 'spiderman' ]
const bolly_heros = ['Rock', 'stonish', 'well-smith']

// console.log(marvel_heros);
// console.log(bolly_heros);
 
//marvel_heros.push(bolly_heros); //in this case push only add elelment not marge to another arry
//console.log(marvel_heros);

// const allheros = marvel_heros.concat(bolly_heros); //this method we use to marge arry one more arry
// console.log(allheros);

// const all_herosmrg = [...allheros, ...bolly_heros] //this method is sperd[... ...]
// console.log(all_herosmrg);

// const anotherarray = [1,2,3,[5,8,9],[1,1,1,[7,8,9]]]  //ess flat method nal sari value spred out ho k mil jandi hai
// realsetarry = anotherarray.flat(Infinity)
// console.log(realsetarry);

// console.log(Array.from('sanjay')) //array vich convert krn li (from)
// console.log(Array.isArray('sanjay')) //eh janan li k ehh arry hai k ni
//console.log(Array.from({name :'sanjay'})); intresting 
const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));  //is of method any variable any array convert to single arry ands set to elelemnt 











