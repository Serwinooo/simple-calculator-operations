const result = document.querySelector('#result');
const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operation');
let currentNum = '';
let storeNum = [];

result.addEventListener('input', function(e){
    this.value = this.value.replace(/\D/g, '');
});

document.querySelector('#clear').addEventListener('click', function(){
    result.value = '';
    currentNum = '';
    storeNum = []; 
});

function firstNum(){
    for (let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click', function(){
            currentNum += this.innerText;
            result.value = currentNum;
        });
    }
}

firstNum();

function operationSet(){
    for (let i = 0; i < operations.length; i++){
        operations[i].addEventListener('click', function() {
            if (currentNum !== '') {
                storeNum.push(currentNum);
                let operator = this.innerText.trim();

                switch (operator) {
                    case '−': 
                        operator = '-';
                        break;
                    case '×': 
                        operator = '*';
                        break;
                    case '÷': 
                        operator = '/';
                        break;
                    default:
                        break;
                }

                storeNum.push(operator);
                console.log(`Pushed operator: '${operator}'`); 
                currentNum = '';
            }
        });
    }
}

operationSet();

function answer(){
    if (currentNum !== '') {
        storeNum.push(currentNum); 
    }

    let resultValue = parseFloat(storeNum[0]);

    for (let i = 1; i < storeNum.length; i += 2) {
        const operator = storeNum[i];
        const nextValue = parseFloat(storeNum[i + 1]);

        console.log(`Performing: ${resultValue} ${operator} ${nextValue}`); 

        switch (operator) {
            case '+':
                resultValue += nextValue;
                break;
            case '-':
                resultValue -= nextValue;
                break;
            case '*':
                resultValue *= nextValue;
                break;
            case '/':
                resultValue = nextValue !== 0 ? resultValue / nextValue : 'Error';
                break;
            default:
                resultValue = 'Error'; 
                console.error(`Unknown operator: ${operator}`); 
                break;
        }
    }
    result.value = resultValue;
    storeNum = []; 
    currentNum = ''; 
}

document.querySelector('#equals').addEventListener('click', answer);
