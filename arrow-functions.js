/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers1(a, b) {
    return a + b;
}

// Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => {
    return a + b;
}

// Single Line Arrow Function With Parameters
// Implicit Returns

const addTwoNumbers3 = (a, b) => a + b;
const addTwoNumbers4 = (a, b) => (a + b);

// One or Zero parameters
const logMessage = message => console.log(message);
const sayHello = () => console.log('Hello');

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)


console.log(addTwoNumbers1(3, 4));
console.log(addTwoNumbers2(3, 4));
console.log(addTwoNumbers3(3, 4));
console.log(addTwoNumbers4(3, 4));

logMessage('Beautiful world');
sayHello();
console.log(returnMultipleLines());