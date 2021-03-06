// 01. 객체 생성
let example_object = {
    'name' : '유프론트',
    'age' : 23,
};

let counter = {
    num : 0,
    increase : function () {
        this.num++;
    }
};

// 02. 객체 리터럴에 의한 객체 생성
let person_obj = {
    name: 'lee',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

console.log(typeof person_obj); // object
console.log(person_obj); // { name: 'lee', sayHello: [Function: sayHello] }

let empty_object = {}; // 빈 객체 생성
console.log(typeof empty_object); // object

// 03. 식별자 네이밍 규칙을 준수하는 프로퍼티 키의 선언
let property_object1 = {
    firstName: 'Yoo', // 식별자 네이밍 규칙 준수
    'last-name': 'jimin', // 식별자 네이밍 규칙 준수 X
};

// 03-1. 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키의 선언
let property_object2 = {
    firstName: 'Yoo',
    // last-name: 'jimin', // SyntaxError : Unexpected topen -
};

// 04. 메서드

let circle = {
    radius: 5,
    getDiameter: function () {
        return 2 * this.radius; // this → circle
    }
};

console.log(`circle : ${circle.getDiameter()}`); // 10
console.log(`프로퍼티 접근 - 마침표 표기(정상 작동) : ${circle.radius}`); // 5
console.log(`프로퍼티 접근 - 대괄호 표기(정상 작동) : ${circle['radius']}`); // 5
// console.log(`프로퍼티 접근 - 대괄호 표기(오류) : ${circle[radius]}`); // ReferenceError - 따옴표로 감싸줘야 함
// console.log(`프로퍼티 접근(오류) : ${radius}`); // ReferenceError - radius 프로퍼티를 찾지 못함
// console.log(`객체에 존재하지 않는 프로퍼티 : ${tiger}`); // undefined 반환

// 05. 프로퍼티 값 갱신 / 동적 생성 / 삭제
let person = {
    name: 'Yoo',
};

// 객체에 해당 프로퍼티 존재 O → 프로퍼티의 값 갱신
person.name = 'Kim';
console.log(person['name']); // {name: "Kim"}

// 객체에 해당 프로퍼티 존재 X → 프로퍼티 생성
person.age = 23;
console.log(person); // {name: "Kim", age: 23}

// 프로퍼티 삭제
delete person.age; // 존재하는 프로퍼티의 경우 삭제 O
delete person.address; // 존재하지 않는 프로퍼티의 경우 삭제 X → 에러 발생 X

console.log(person); // {name: "Kim"}

let str = 'front-end';
console.log(str.length); // 9
console.log(str.charAt(0)); // F

let str2 = 'coding';
str2.prop = 'make prop'; // JS 내부적으로 String 객체가 만들어짐

// prop 프로퍼티는 해당 객체에 저장된 후 곧 제거 
console.log(str2.prop); // undefined

let score = 80;
let copy = score;

copy = 100;
console.log(score); // 80

let person = {
    name: 'Lee'
};

person.name = 'Kim'; // 프로퍼티의 갱신
person.address = 'Seoul'; // 프로퍼티의 추가

// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 참조
console.dir(add); // add(x, y)

// 함수 호출
console.log(add(2, 5)); // 7

// 함수 표현식
var add = function(x, y) {
    return x + y;
}
console.log(add(2, 5)); // 7

// 기명 함수 표현식
var sub = function foo(x, y) {
    return x - y;
}
console.log(sub(5, 2)); // 3
console.log(foo(5, 2)); // ReferenceError : foo is not defined

// 함수 참조
console.dir(add); // f add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(5, 2)); // TypeError : sub is not a function

// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 표현식
var sub = function (x, y) {
    return x - y;
}

// Function 샏성자 함수
var add = Function('x', 'y', 'return x + y');

var add1 = (function () {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    };
}());
console.log(add1(1, 2)); // 13

var add2 = (function () {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;');
}());
console.log(add2(1, 2)); // ReferenceError : a is not defined

// 화살표 함수 (ES6)
var add = (x, y) => x + y;

// 함수 호출
function add(x, y) {
    return x + y;
}

console.log(2, 5); // 7
console.log(x, y); // ReferenceError : x is not defined
console.log(add(2)); // NaN
console.log(add(2, 5, 10)); // 7
console.log(add('a', 'b')); // ab

// 익명 즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    return a + b;
}());

// 기명 즉시 실행 함수
(function foo() {
    var c = 4;
    var d = 10;
    return c + d;
}());

foo(); // ReferenceError : foo is not defined

// 재귀함수
function countDown(n) {
    if (n < 0) return;
    console.log(n);
    countDown(n-1);
}

// 중첩함수
function outer() {
    var x = 1;

    function inner() {
        var y = 2;
        console.log(x + y); // 3
    }

    inner();
}

outer();

// 외부에서 전달받은 f를 n만큼 반복 호출
function repeat(n, f) {
    for (let i = 0; i < n; i++) {
        f(i); // i를 전달하며 f를 호출
    }
}

let logAll = function (i) {
    console.log(i);
};

// 반복 호출할 함수를 인수로 전달
repeat(5, logAll); // 0 1 2 3 4 

let logOdds = function (i) {
    if (i % 2) console.log(i);
};

// 반복 호출할 함수를 인수로 전달
repeat(5, logOdds); // 1 3

// ============== 클래스 =============
let person1 = {
    student_number : '20193017',
    phone_number : '010-9936-4524',
    email : 'dbwlals9936@naver.com',
}

let person2 = {
    student_number : '20221234',
    phone_number : '010-class_person2-전화번호',
    email : 'bbiyak99u@naver.com',
}

class Person {
    constructor(student_number, phone_number, email) {
        // 인수로 인스턴스 초기화
        this.student_number = student_number;
        this.phone_number = phone_number;
        this.email = email;
    }
}

// 인수로 초기값 전달. 초기값 → constructor에 전달
const class_person1 = new Person('20193017', '010-9936-4524', 'dbwlals9936@naver.com');
const class_person2 = new Person('20221234', '010-class_person2-전화번호', 'bbiyak99u@naver.com');


console.log(class_person1);
console.log(class_person2);
console.log(typeof class_person1);
console.log(typeof Person);

function Person_2(student_number, phone_number, email) {
    this.student_number = student_number;
    this.phone_number = phone_number;
    this.email = email;
}

class Person {}

// 인스턴스 생성
const me = new Person();
console.log(me); // Person {}

// 클래스를 new 연산자 없이 호출하면 타입 에러 발생
const you = Person(); // TypeError : Class Constructor Foo cannot be invoked without 'new'

// 익명 클래스 표현식
const Person = class {};

// 기명 클래스 표현식
const Person = class MyClass {};

const us = new Person();

// 클래스 이름 MyClass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자
console.log(MyClass); // ReferenceError : MyClass is not defined
const they = new MyClass(); // ReferenceError : MyClass is not defined

class Person {
    // 생성자
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name;
    }

    // 프로토타입 메서드 
    sayHi() {
        console.log(`Hi! My name is ${this.name}`);
    }

    // 정적 메서드
    static sayBye() {
        console.log('Bye');
    }
}

class Person {
    constructor() {}
    constructor() {}
}
// SyntaxError: A class may only have one constructor

class Person {
    // constructor 생략 시 빈 constructor가 암묵적으로 정의
    constructor() {}
}

// 빈 객체 생성
const me1 = new Person();
console.log(me1); // Person {}


