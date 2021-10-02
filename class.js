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