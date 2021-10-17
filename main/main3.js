// true: -1, 'hello', 2, [],,
// false: 0, -0, null, undifined, '',,

let num; // undifined => false
num && console.log(num); // 출력 X

let num2 = 4; // 값을 정의해줌 => true
num && console.log(mun2); // 출력 O

if (true) {
    console.log('true!');
} else {
    console.log('false!');
}

// 정의되지 않거나 값이 없는 것을 할당하게 되면 오류(false)