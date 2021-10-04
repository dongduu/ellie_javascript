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
// for (key in obj)
console.clear(); // 콘솔 창을 모두 지움
for (key in dongjoo) {
    console.log(key); // dongjoo 안에 있는 key를 모두 띄움
}
// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (i = 0; i < array.length; i++){
    console.log(array[i]);
}
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'hyun6ik', age: 27};
const user2 = user;
user2.name = 'coder';
console.log(user.name);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const apple = {color: 'red'};
const banana = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, apple, banana);
console.log(mixed);
// 나중에 있는 값으로 덮어쓰기 때문에 이런 결과가 나옴