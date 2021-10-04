'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits[1]);
console.log(fruits[3]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for (let value of fruits) {
    console.log(value);
}
// c. forEach
fruits.forEach((fruits, index, array) => console.log(fruits, index, array));
// forEach는 배열 안에 들어있는 value마다 내가 출력하고 싶은 함수를 출력해줌

// 4. Addition, deletion, copy
// push: 배열 가장 끝에 아이템 추가
fruits.push('peach', 'manggo');
console.log(fruits);

// pop: 배열 가장 뒤에 아이템 삭제
fruits.pop();
console.log(fruits);

// unshift: 배열 가장 앞에 아이템 추가
fruits.unshift('manggo');
console.log(fruits);

// shift: 배열 가장 앞에 있는 아이템 삭제
fruits.shift();
console.log(fruits);

// note! shift, unshift는 pop, push보다 느림

// splice: 지정된 위치의 아이템 제거
fruits.splice(1, 1);
console.log(fruits);
//fruits.splice(1) 어디까지 지울 지 정하지 않으면 지정된 인덱스부터 끝까지 전부 지움
fruits.splice(1, 1, 'lemon');
console.log(fruits);
// 끝에 추가할 값을 넣으면 추가가 됨

// combine two arrays
const number1 = [1, 2];
const number2 = [3, 4, 5];
const newNumber = number1.concat(number2);
console.log(newNumber);

// 5. Seaching
// indexOf: 어느 index에 위치하는가
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('banana'));

// includes: 값이 배열에 있는가
console.log(fruits.includes('apple'));
console.log(fruits.includes('banana'));

// lastIndexOf
fruits.push('apple');
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));
