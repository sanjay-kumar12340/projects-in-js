const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click',function(evnt){
        console.log(evnt);
        console.log(evnt.target);
        // if (evnt.target.id === 'grey') {
        //     body.style.backgroundColor = evnt.target.id;
            
        // }
        switch (evnt.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
                case 'blue':
                    body.style.backgroundColor = 'blue';
                    break;
             
                
                case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
         
         
            default:
                console.log('No matching color found');
        }
       
    });
}); 