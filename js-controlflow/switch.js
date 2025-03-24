// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("january")
        
        break;
    case 2:
        console.log("february")
        
        break;
    case 3:
        console.log("march")
        
        break;
    case 4:
        console.log("april")
        
        break;

    default:
        console.log("default case match");
        
        break;
}


////////////////TRUTHY VALUES AND FALSY VALUES//////////////
const userEmail = []
 
if(userEmail){
    console.log("get user Email");
}
else{
   //console.log("don't have user Email");
    
}


if(userEmail.length === 0){
    console.log("array is empty");
    
}
else{
    console.log("don't have user Email");
     
 }
 
 