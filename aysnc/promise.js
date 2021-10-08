'use strict'

// Promise
// : 정해진 시간의 기능을 수행 후, 정상적으로 기능이 수행 하면 성공 및 결과값 표시, 아니면 오류 표시
// promise in a javascript object
// 비동기적인 것을 수행할 때 콜백함수 대신에 사용하는 오브젝트
// State(상태): pending(기능 수행 중) => fulfillde(성공) or rejected(실패)
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the excutor runs automatically.
const promise = new Promise ((resolve, reject) => {
    // doing some heavy work (network, read file)
    console.log('doing something.');
    setTimeout(() => {
        // resolve('dongdu');
        reject(new Error('No network'));
    }, 2000); 
});
// promise 만드는 순간 우리가 전달한 콜백함수가 바로 실행 -> 불필요한 네트워크 통신의 우려

// 2. Consumers
// : then, catch, finally
promise
    .then (value => {
        console.log(value);
    })
    .catch (error => {
        console.log(error);
    })
    .finally (() => {
        console.log('finally'); 
    });
// then: promise가 잘 수행된 후 resolve의 값을 받아옴
// catch: promise가 실패 한 후 reject의 값을 받아옴
// finally: 성공하든 실패하든 무조건 실행

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 4000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 4000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handing
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen => 
    new  Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    }); 

getHen ()
    .then (getEgg)
    .catch (error => {
        return '🍕'; // 계란을 받아오는 것을 실패 하였을 때 대신해서 입력
    })
    .then (cook)
    .then (console.log)
// 원래 .then (hen => getEgg(hen)) but, 위처럼 생략 가능
    .catch (console.log);

