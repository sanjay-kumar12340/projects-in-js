///genrate a random color
const RandomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; ++i ){
        color += hex[Math.floor(Math.random()* 16)]

    }
    return color
    
}
let intervalID
   const startchangingclolor = function(){
    if (!intervalID) {
        intervalID  = setInterval(changebgcolor,1000)
        
    }
   function changebgcolor (){
    document.body.style.backgroundColor = RandomColor()
   }

   }
   const stopchangingclolor = function(){
    clearInterval(intervalID)
    intervalID = null
    
   }
    document.querySelector('#start').addEventListener('click', startchangingclolor)
    document.querySelector('#stop').addEventListener('click', stopchangingclolor)
      
      


    