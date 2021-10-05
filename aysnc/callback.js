'use strict'

// 동기
// 자바스크립트는 동기적.
// hoisting이 된 이후부터 코드가 우리가 작성한 순서에 맞춰 실행됨
// hoisting: var, function이 자동적으로 제일 위로 올라감
// callback: 바로 실행 X, 입력한 시간이 지나면 실행
console.log(1); // 1
setTimeout(() => console.log(2), 2000); // 4
console.log(3); // 2

// Synchronous callback(즉각적)
function printImmidiately (print) {
    print();
}
printImmidiately(() => console.log('hi')); // 3

// Asynchronous callback(나중, 언제 실행될 지 모름)
function printWithDelay (print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay (() => console.log('hello'), 4000); // 4

// Callback Hell example
class UserStorage {
    loginUser (id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'dongdu' && password === 'jjang')||
                (id === 'umma' && password == 'jjangjjang')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles (user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'dongdu') {
                onSuccess({name: 'dongju', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id.');
const password = prompt('enter your password.');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`)
            }, 
            (error) => {
            console.log(error);
            }
        );
    },
    error => {console.log(error);}
    );

// 콜백지옥의 문제점
// 가독성이 떨어짐
// 비지니스 로직을 한눈에 이해하기 어려움
// 에러 발생이나 , 디버깅 시 어려움
// 유지 보수가 어려움