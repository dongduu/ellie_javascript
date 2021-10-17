// primitive
// number, string, boolean, null, undifined, (symbol)
let age = 2;
let number2 = age; // 복사해옴

number2 = 3; // age에는 영향을 주지 않음

// object
let obj = {
    name: 'dongdu',
    age: 22;
}

console.log(obj.name);

let obj2 = obj; // 복사해옴

obj.name = 'james';

// let과 const
let a = 2;
a = 3;
a = 4;

const b = 12;
b = 11; // error

// object는 주소 역할, 안의 내용은 바꾸는 것이 가능
