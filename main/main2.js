// 함수 정의 및 호출
const num1 = 1;
const num2 = 2;
const result1 = num1 + number2;
console.log(result);

const num3 = 3;
const num4 = 4;
const result2 = num1 + number2;
console.log(result2);
// 반복되는 로직 => 함수(재사용 가능)

function add (a, b) {
    return a + b;
}
// 타입이 없기 때문에 유추할 수 밖에 없음 => 타입스크립트로 해결 가능

const sum = add(5, 6);
console.log(sum);
// 함수 호출 => 함수 실행

// 함수를 다른 변수에 할당
function add2 (num1, num2) {
    return num1 + num2;
}
// add2: 주소 역할

const doSomething = add2; // 복사해옴(같은 함수를 가리키는 중)

const result2 = doSomething(2, 3);
console.log(result2)
const result2 = add2(2, 3);
console.log(add2)
// 함수 이름은 가리키는 용도일뿐

function print () {
    console.log('dongdu');
}
// 아무런 인자를 받지 않는 함수
print();
print(2, 3); // 인자를 받지 않는 함수는 무시 괄호 안에 문자를 무시함

// 함수를 다른 함수에 인자로 전달
function surprise (operator) {
    const result3 = operator();
    console.log(result3);
}

surprise(); // 인자가 전달되지 않아서 오류가 생김
surprise(add); // add의 인자가 전달되지 않아서 NaN가 뜸

function surprise2 (operator) {
    const result3 = operator();
    console.log(result3);
}

surprise2(add); 