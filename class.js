'use strict';
// Object-oriendted programming
// class: template
// object: intance of a class
// javascript classes
// - added in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor (name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak () {
        console.log(`${this.name}: hello!`);
    }
}

const dongdu = new Person ('dongju', 22);
console.log(dongdu.name);
dongdu.speak();

// 2. Getter and Setter
class User {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // get , set 호출 개념
    get age () {
        return this._age;
    }

    set age (value) {
        // if (value < 0) {
        //     throw Error ('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'jobs', -1);
console.log(user1.age);

// 3. Fields (public, private)
// 최근에 추가 됨
class Experiment {
    pubilcField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.pubilcField);
console.log(experiment.privateField);

// 4. Static properties and methods
// 최근에 추가 됨
// object에 상관없이 공통적으로 클래스에서 사용한다면 이것을 사용하는 것이 효율적
class Article {
    static publisher = 'Dream coding';
    constructor(articleNumber) {
        this.articleNumber =articleNumber;
    }

    static printPublisher () {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log (Article.publisher); // (article1. publisher) nono!
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw () {
        console.log(`drawing ${this.color} color of`);
    }

    getArea () {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} // extends => Shape 클래스와 이어줌, 동일한 것을 재사용
class Triangle extends Shape {
    draw () {
        super.draw(); // 부모 함수에 들어와라! 위 함수를 거역 못함  
        console.log('△');
    }
    getArea () {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle (20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle (20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); 
// 자바스크립트의 모든 오브젝트와 클래스는 Object에 상속됨