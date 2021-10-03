// Object
// one of the Javascript's data type
// a collection of related data and/or functionality
// Nearly all objects in Javascript are instnace of Object
// object = {key: value...} key와 value의 집합체

// 1. Literals and properties
// 오브젝트 만드는 방법
const obj1 = {}; // object literal
const obj2 = new Object; // object constructor

// 오브젝트의 순기능
const name = 'dongdu';
const age = 22;
// 각 변수에는 하나만 들어갈 수 있음
function print(name, age) {
    console.log(name);
    console.log(age);
}
// => 관리하기 불편

const dongjoo = {name: 'dongduu', age: 22};
function print (person) {
    console.log(person.name);
    console.log(person.age);
}
print (dongjoo);

// 오브젝트 추가 및 삭제
dongjoo.hasJob = true;
console.log(dongjoo.hasJob);

delete dongjoo.hasJob;
console.log(dongjoo.hasJob);

// 2. Computed properties
// key should be always string
console.log(dongjoo.name);
console.log(dongjoo['name']);
dongjoo['hasJob'] = true;
console.log(dongjoo.hasJob);

function printValue (obj, key) {
    console.log(obj[key]); // (obj.key) nono!
}
printValue(dongjoo, 'name');

// 3. Property value shorthand
const person1 = { name: 'bb', age: 2};
const person2 = { name: 'ss', age: 3};
const person3 = { name: 'aa', age: 4};
const person4 = new Person('gg', 6);

// 4. Constructor function
function Person (name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operatoer: property existence check (key in obj)
// 해당하는 키가 오브젝트 안에 있는가?
console.log ('name' in dongjoo);
console.log ('random' in dongjoo);
console.log (dongjoo.random);

// 6. for..in vs for...of