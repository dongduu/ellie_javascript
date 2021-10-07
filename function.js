// Function 
// - 프로그램을 구성하는 기본적인 Building block
// - subprogram 여러번 재사용이 가능
// - 한 가지의 과업 또는 값을 계산하기 위해 사용

// 1. Function declaration
// function name (param1, param2) {body... return;}
// 하나의 함수는 한 가지의 일만 가능
// naming: 동사 형태가 좋음
// e.g. createCardAndPoint => createCard, createPoint
// 자바스크립트 안에서 함수는 객체(object)
function printLog (message) {
    console.log(message);
} 
printLog('Hello');

// 2. Parameters
// premitive parameters: passed by value 값 전달
// object parameters: passed by reference 레퍼런스 전달
function changeName (obj) {
    obj.name = 'corder';
}
const dongju = {name: 'donjoo'};
changeName(dongju);
console.log(dongju);

// 3. Default parameters (added in ES6)
function showMassage (message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMassage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll (...args) { // ... => 배열 형태로 전달
    for (let i = 0; i < args.length; i++) {
        console.log(agrs[i]);
    }
    for (const arg of args) { // 더 쉽게
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg)); // 더더 쉽게
}
printAll('dream', 'coding', 'dongdu');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage () {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser1 (user) {
    if(user.point > 10) {
        // long upgrade logic,,,
    }
}
// good
function upgradeUser2 (user) {
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic,,,
}

// First-class function
// 다른 변수와 마찬가지로 변수에 할당이 되고 parameter로 전달이 되며 return 값을 받을 수 있음

// 1. Function expression
// - function declaration: hoisting 가능(함수가 선언되기 전에도 호출이 가능)
// - function expression: hoisting 불가능
const print = function () { // anonymous function
    console.log('print');
};
print();
const printAgain = print;

// 2. Callback function using function eapression
// 함수를 전달해서 상황이 되면 맞는 함수를 부른다
function randomQuiz (answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () {
    console.log('Yes!');
}
const printNo = function () {
    console.log('No!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// 항상 anonymous
const simplePrint = () => console.log('simple!');
const add = (a, b) => a + b;
const simplePrint2 = () => {
    // do something more
    return a * b;
}

// IIFE: Immidiately Invoked Function Expression
// 바로 호출 가능
(function hello() {
    console.log('hello');
})();
