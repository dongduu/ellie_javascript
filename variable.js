// 1. Use strict
// added in ES5
// use this for Valine Javascript.
'use strict';

// 2. Variabla(Mutable) r/w(read, write)
// let (added in ES6)
let globalName = 'global name';
{	let name = 'dongdu';
	console.log(name);
    console.log(globalName);
}
   console.log(name); // 출력 불가(괄호 안에서만 가능)
   console.log(globalName); // 출력 가능

// var (don't ever use this!)
// var hoisting 어디에 선언했냐에 상관없이 제일 위로 끌어 올려주는 것
// var 블럭스콥이 없음
{
    age = 4;
    var age; 
};
console.log(age); 

// 3. Constant(Immutable) r(read only)
// Note!
// Immutable data types: primitive types, frozen objects ( )
// Mutable data types: all objects by defalt are mutable in JS
// 값을 한 번 선언한 후 웬만하면 바꾸지 않게 하라
// - 보안상의 이유(security)
// - 동시에 값을 변경하지 못하게 함(thread safety)
// - 실수 방지(reduce human mistake)
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol (값 자체)
// object, box container
// function, first-class function
const count = 17; // integer(정수)
const size = 17.1; // decimal number(소수점의 숫자)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicia numeric value: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

// bigInt (새롭게 추가 됨, 아직 쓰여지지는 않음)
const bigInt = 1234567890123456781234567812345671234567812345n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

// null
let nothing = null;
console.log(`value: ${null}, type: ${typeof null}`);

// undefined
let x ;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`);

// object, real-life object, data structure
const dongdu = {name: 'dongjoo', age: 22};
dongdu.age = 23;

// 5. Dynamic typing
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // number
console.log(text.charAt(0)); // error
