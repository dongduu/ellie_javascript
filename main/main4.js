class Counter {
    constructor (run5time) {
        this.counter = 0;
        this.callback = run5time;
    }
    increase () {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback(this.counter);
        }
    }
}

function printSomething (num) {
    console.log(`Wow! ${num}`);
}

const coolCounter = new Counter(printSomething); // 새로운 오브젝트를 만듬, 콜백함수를 전달하지 않으면 타입 에러

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase(alertNum);
// 콜백함수를 사용했을 때 장점
// 프린트를 조절 가능(원하는 기능 수행 가능)
