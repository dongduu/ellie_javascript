// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log (2 + 1); // 더하기
console.log (2 - 1); // 빼기
console.log (2 / 1); // 나누기
console.log (2 * 1); // 곱하기
console.log (2 ** 1); // 제곱

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// counter = counter + 1;
// preIncrement = counter;
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// postIncrement = counter;
// counter = counter + 1;
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

// 5. Conparison operators
console.log(10 < 5);
console.log(10 <= 5);
console.log(10 > 5);
console.log(10 <= 5);

// 6. Logical operators
const value1 = false;
const value2 = 4 < 2;
// || (or)
// 가장 첫 번째 true 값을 찾음
console.log(`or: ${value1 || value2 || check()}`);
// && (and)
// 가장 첫 번째 false 값을 찾음
console.log(`and: ${value1 && value2 && check()}`);
function check() {
    for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('omg')
    }; 
    return true;
};
// ! (not)
console.log(!value1);
// Note!
// 가장 복잡한 값을 가장 뒤에 놓는다

// 7. Eqiality
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// object equality by reference
const dongdu1 = { name: 'dongdu' };
const dongdu2 = { name: 'dongdu' };
const dongdu3 = 'dongdu';
console.log(dongdu1 == dongdu2);
console.log(dongdu1 === dongdu2);
console.log(dongdu1 === dongdu3);

// 8. Conditional operators
// if, else if, else
const name = 'dongdu';
if (name === 'dongdu') {
    console.log('Welcome, dongdu');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
};

// 9. Ternary operator 
// condition ? value1 : value2;
console.log(name === 'dongdu' ? 'yes' : 'no');

// 10. Switch statement
// 조건을 다양하게 체크할 때
const browser = "IE";
switch (browser) {
    case "IE":
        console.log('go away!');
        break;
    case "Chrome":
    case "Firefox":
        console.log('I love you!');
        break;
    default:
        console.log('same all!');
        break;
};

// 11. Loops
// while
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
};
// do while
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// for loop
// for (begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
};
for (let i = 3; i > 0; i = i - 2) {
    console.log(`for: ${i}`);
};
// nasted loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    };
};

// break
// 아예 루프를 끝내는 것
// continue
// 현재만 스킵, 다음 스탭으로 넘어감
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1: ${i}`);
}
for (let i = 0; i < 11; i++) {
    if(i === 9) {
        break;
    }
    console.log(`q1: ${i}`);
}