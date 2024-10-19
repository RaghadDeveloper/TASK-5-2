let inputValue = document.querySelector('.input')
let inputUnit = document.querySelector('.input-unit')
let resultUnit = document.querySelector('.result-unit')
let convertBtn = document.querySelector('.convert-btn')
let resultValue = document.querySelector('.result')

function convert(){
    resultValue.textContent = inputValue.value + ' ' + inputUnit.value + ' = '
    if(inputUnit.value == 'kilometer'  && resultUnit.value == 'kilometer'){
        resultValue.textContent += inputValue.value +' '+ resultUnit.value
    }
    else if  (inputUnit.value == 'kilometer' && resultUnit.value == 'meter'){
        resultValue.textContent += (inputValue.value * 1000) +' '+ resultUnit.value
    }
    else if (inputUnit.value == 'kilometer' && resultUnit.value == 'centimeter'){
        resultValue.textContent += (inputValue.value * 100000) +' '+ resultUnit.value
    }
    else if(inputUnit.value == 'meter'  && resultUnit.value == 'kilometer'){
        resultValue.textContent += (inputValue.value / 1000) +' '+ resultUnit.value
    }
    else if  (inputUnit.value == 'meter' && resultUnit.value == 'meter'){
        resultValue.textContent += inputValue.value +' '+ resultUnit.value
    }
    else if (inputUnit.value == 'meter' && resultUnit.value == 'centimeter'){
        resultValue.textContent += (inputValue.value * 100) +' '+ resultUnit.value
    }
    else if(inputUnit.value == 'centimeter'  && resultUnit.value == 'kilometer'){
        resultValue.textContent += (inputValue.value / 100000) +' '+ resultUnit.value
    }
    else if  (inputUnit.value == 'centimeter' && resultUnit.value == 'meter'){
        resultValue.textContent += (inputValue.value / 100) +' '+ resultUnit.value
    }
    else if(inputUnit.value == 'centimeter' && resultUnit.value == 'centimeter'){
        resultValue.textContent += inputValue.value +' '+ resultUnit.value
    }
    else {
        resultValue.textContent =  'Invalid input'
    }

}