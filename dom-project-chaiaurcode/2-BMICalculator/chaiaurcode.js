const form = document.querySelector('form');
form.addEventListener('submit', function(calevn){
    calevn.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === ''|| height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
        
    }else if (weight === ''|| weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`;
    }else{
       bmi = (weight / ((height*height)/10000)).toFixed(2);
 
       //show the result
       results.innerHTML = `<span>${bmi}</span>`;
       if (bmi < 18.6) {
        results.innerHTML = `Underweight: BMI is less than 18.6 bmi ${bmi}`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `Normal weight: BMI is between 18.6 and 24.9 bmi ${bmi}`;
    } else {
        results.innerHTML = `Overweight: BMI is 24.9 or more bmi ${bmi}`;
    }
    
    }
});  