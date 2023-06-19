var isEven = (element) => {
    return element % 2 === 0;
}

console.log(isEven(5));

// var result = [2,4,6,8].every(isEven);
// console.log(`Result = ${result}`);


// callback function..
var result = [2,4,6,8].every((ele) => {
    return ele%2 === 0;
});


function greeting(name) {
    alert(`Hello, ${name}`);
}
  
function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
}
  
  processUserInput(greeting);
  

