///////////SCOPS///////
let a = 200
if(true){
    let a = 10
    const b = 20
}
//console.log(a);  //kise statement vich let te const define nhihonge but (var)run ho javega 
//console.log(b);
//console.log(c);

///////NESTED scope////////
function one(){
    const username = "sanjay"
    
    function two(){
        const website = "youtube"
      //  console.log(username);
    }
    //console.log(website);

    two()
    
}
one()

if (true) { // use in if statement nested scop
    const username = "sanjaysksk"
    if (username === "sanjaysksk") {
        const website = " youtube"
        //console.log(username + website);

    }
}

// ********intresting info*********
console.log( addone(5));

function addone (num){ //in normal functon run
    return num + 1
   
    
}

console.log(addtwo(5)); //es vich function declaration to phela console ni kr skde

const addtwo =  function(num){ //ess treke nu Expression v bol dine a eithe fun variable vich hai
    return num + 2

}
// console.log(addtwo(5));

