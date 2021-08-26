// alert("hello, world!");
console.log('Hello World!');

//Constructor
class Calculator{
    constructor(lastInnerText, newInnerText){
        this.lastInnerText = newInnerText;
        this.newInnerText = lastInnerText;
        
    }
}

//mentions
const addButton = document.querySelector('[add]')
const equalButton = document.querySelector('[equal]')
const lastInnerText = document.querySelector('[data-previous-operand]')
const newInnerText = document.querySelector('[data-current-operand]')



// If any button is clicked then this function is invoked.
function helloBabin(event){ 
    console.dir(event);
    console.log(event.target.innerText); // logic starts from here!
    displayResult.innerText = event.target.innerText;
}

// Event listeners
const buttons = document.querySelector('.calc-buttons');
buttons.addEventListener('click', helloBabin);

// Screen 
const displayResult = document.querySelector('.screen');
console.dir(displayResult);
displayResult.innerText = ' 0';


// 7 => + =>3 =>10
//7 + 3 = 10? 


//what is the problem
//what is my solution
//what was my expectation/hypothesis
//what is the actual result