'use strict'

// JSON
// data를 주고 받을 수 있는 가장 간편한 format
// text를 기반으로 하여 가벼움
// 읽기 쉬움
// {key: vlaue}
// 직렬화 및 전송을 위해 쓰임
// 프로그램 언어나 플랫폼에 상관없이 쓰일 수 있음

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true)
console.log(json);

json = JSON.stringify([`apple'`, `banana`]);
console.log(json);

const rabbit = {
    name: 'dongdong',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    }
};
json = JSON.stringify(rabbit);
console.log(json);
// symbol(자바스크립트에만 있는 특별한 데이터)은 출력 X, 함수는 오브젝트에 포함되지 않기 때문에 출력 X

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log (`key: ${key}, value: ${value}`);
    return key === 'name' ? 'dongdu' : value;
});

// 2. JSON to Object
// parse(obj)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); => 함수가 스트링 타입으로 변환될 때 함수를 포함하지 못했기 때문

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); => 포함된 Date는 함수가 아니라 스트링이기 때문

const obj2 = JSON.parse(json, (key, value) => {
    console.log (`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date() : value;
})
console.log(obj2.birthDate.getDate());

// Overloading: 함수의 이름은 동일하지만 어떤 parameter을 전달하느냐애 따라서 각각 다른 방식으로 호출이 가능