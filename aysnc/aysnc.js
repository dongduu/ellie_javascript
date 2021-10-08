// async & await
// 깔끔하게 promise를 사용 할 수 있게 함
// syntactic sugar
// : 기존에 존재하는 것 위에 또는 기존에 존재하는 것을 감싸서 조금 더 간편하게 쓸 수 있는 api를 제공하는 것

// 1. async
// 함수 앞에 적으면 promise를 쓰지 않아도 자동적으로 코드 블럭들이 promise로 변환
async function fetchUser  () {
    // 네트워크를 통신해서 백엔드에서 데이터를 받아오는 10초가 걸리는 코드    
    return 'dongdu';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay (ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
}

async function getApple () {
    await delay (2000); // delay가 끝날 때까지 기다려 주다가 🍎 return
    return '🍎';
}

async function getBanana () {
    await delay (1000);
    return '🍌';
}
// await: async가 있는 함수 안에서만 사용 가능

function pickFruits () {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`)
    });
}

async function pickFruits2 () {
    const apple = await getApple();  
    const banana = await getBanana();
    return `${apple} + ${banana}`;  
}

pickFruits().then(console.log);
pickFruits2().then(console.log);

// 3. async 병렬 처리
async function pickFruits3() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;  
    const banana = await bananaPromise;  
    return `${apple} + ${banana}`;  
}
pickFruits3().then(console.log);
// 병렬처리로 좀 더 효율적으로 코드 작성 가능

// 4. useful Promise APIs
function pickAlFruits () {
    return Promise.all([getApple(), getBanana()]).then (fruits => 
        fruits.join(' + ')
    );
}
pickAlFruits().then(console.log);

function pickOnlyOne () {
    return Promise.race([getApple(), getBanana]);
}
pickOnlyOne().then(console.log);