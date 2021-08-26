// alert("hello, world!");
console.log('Hello World!');

let firstOperand;
let secondOperand;
let operator;
let result;

// If any button is clicked then this function is invoked.
function helloBabin(event){ 
    const curValue = event.target.innerText;
    console.log(curValue); // logic starts from here!
    //condition
    if(curValue >= 0 && curValue  <= 9){
        displayResult.innerText = curValue;
        if(firstOperand === undefined){
            firstOperand = curValue;
        }else{
            secondOperand = curValue;
        }
     }else if (curValue === "=") {
         // eqauls execution 
         if(operator ==="+"){
            result = Number(firstOperand) + Number(secondOperand);
        }
        displayResult.innerText = result;
     } else {
         operator = curValue;
     }
    console.log("first:",firstOperand); 
    console.log("op:", operator);
    console.log("second:",secondOperand);

}

// Event listeners
const buttons = document.querySelector('.calc-buttons');
buttons.addEventListener('click', helloBabin);

// Screen 
const displayResult = document.querySelector('.screen');
console.dir(displayResult);
displayResult.innerText = '0';


// 7 => + =>3 =>10
//7 + 3 = 10? 


//what is the problem
//what is my solution
//what was my expectation/hypothesis
//what is the actual result