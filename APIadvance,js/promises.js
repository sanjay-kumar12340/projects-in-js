//PROMISE///
// const promiseone = new Promise(function(resolve, reject){ ///first create promise
//         //do an asycn tasks
//         //database calls, cryptography, network calls
//         setTimeout(function(){
//             console.log('async task is complete');
//             resolve()
            
//         }, 1000)
// });

// promiseone.then(function(){ //then is used for resolve (consumed process)
//     console.log('promise  consumed');
    
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('async task two complete');
//         resolve()
        
//     },1000)
// })
// .then(function(){    //without variable direct consume system
//     console.log('async is two consumed');
    
// });

// const promisethree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:'sanjay',email:'sanjayasa@gmail.com'})   //in resolve console string element 
//     },1000)
// });

// promisethree.then(function(user){
//     console.log(user);
    
// });

// const promisefour = new Promise(function(resolve, reject){   ///use IF ELSE ststment  and check conmsued code
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username:'sanjayThakur', password:'1234'})
//         }else{
//             reject('ERROR:something went wrong')
//         }

//     }, 1000)
// })

// promisefour.then((user) =>{
//     console.log(user);
//     return user.username
// })
// .then((username) =>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
    
// })
// .finally(() => console.log('The promise is either resolve and rejected ')
// )

// const promisefive = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username:'JAVASCRIPT', password:'1234'})
//         }else{
//             reject('ERROR: JS went wrong')
//         }

//     }, 1000)

//     })
//     async function consumepromisefive(){   ///catychtry used method
//      try {
//         const response = await promisefive
//         console.log(response); 
    
//      } catch (error) {
//         console.log(error);
//      }
//     }
//     consumepromisefive()


    ////direct assume code///

    // async function getallusers(){
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users')

    //         const data = await response.json()
    //         console.log(data);
                        
    //     } catch (error) {
    //         console.log('E:',error);
            
    //     }
    // }
    // getallusers()

    ///esi method ko .then .catch format  ma kase likhe/////////

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((response)=> console.log(response)  )
    .catch((error) =>{
        console.log(error);
        

    })