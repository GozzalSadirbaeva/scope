// 1
let x = 10;
function testScope() {
    let x = 20;
    console.log("Inside function:", x); // What will this print?
}
testScope();
console.log("Outside function:", x); // And this?

// Inside function: 20 chunki function local scope da declare qilinadi va x=20 local scope da joylashgan
// Outside function: 10 chunki x=10 global scope da joylashgan va outside function ham global scopeda

console.log('/*********************************/');

// 2
{
    let blockLet = "I am block scoped";
    var blockVar = "I am function/global scoped";
}
console.log(blockLet); // Will this throw an error?
console.log(blockVar); // What will this print?
// let blockLet dan ReferenceError chiqadi chunki let block scope dan tashqarida elon qilinmaydi
// var blockVar dan -I am function/global scoped chiqadi chunki var block scopedan ichkarida yoki tashqarida chaqirilishga qaramaydi
console.log('/*********************************/');

// 3
function outer() {
    let outerVar = "I'm from the outer function";
    function inner() {
        console.log(outerVar); // Will this be accessible?
    }
    inner();
}
outer();

// I'm from the outer function chiqadi chunki let outerVar bilan inner function bitta local scopeda joylashgan
console.log('/*********************************/');

// 4
console.log(tempVar); // Will this throw an error?
let tempVar = "I'm in TDZ";

// ReferenceError chunki tempVar elon qilinishdan oldin chaqirilyapti
console.log('/*********************************/');


// 5
function scopeTest() {
    if (true) {
        var funcVar = "I'm function scoped";
        let blockLet = "I'm block scoped";
    }
    console.log(funcVar); // Will this be accessible?
    console.log(blockLet); // And this?
}
scopeTest();
// var funcVar dan -I'm function scoped chiqadi chunki var block scopedan ichkarida yoki tashqarida chaqirilishga qaramaydi
// let blockLet dan ReferenceError chiqadi chunki let block scope dan tashqarida elon qilinmaydi

console.log('/*********************************/');

// 6
let name = "Global";
function shadowingExample() {
    let name = "Local";
    console.log(name); // Which 'name' will be logged?
}
shadowingExample();

// Local chunki console.log local scope da chaqirilyapti
console.log('/*********************************/');

// 7
function outerFunc() {
    let outerVar = "I'm a closure variable";
    return function innerFunc() {
        console.log(outerVar); // Will this have access to outerVar?
    };
}
const closureFunc = outerFunc();
closureFunc();
// I'm a closure variable
console.log('/*********************************/');

// 8
// console.log(i); // Will this throw an error?
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// ReferenceError chunki i for dan kegin chaqirilishi kerak yokida for dan chaqirilmasa ham bo'ladi
console.log('/*********************************/');

// 9
function testVarScope() {
    var localVar = "I’m function scoped";
}
testVarScope();
console.log(localVar); // Will this be accessible?
// ReferenceError
console.log('/*********************************/');

// 10
function parent() {
    let parentVar = "I'm in the lexical scope";
    const child = () => console.log(parentVar);
    child();
}
parent();
// I'm in the lexical scope chunki child function da parentvar log qilinyapti va ikkalasi ham local scope da joylashgan
console.log('/*********************************/');

// 11
if (true) {
    let message = "Inside block";
}
console.log(message); // What will happen here?
// ReferenceError chunki message notog'ri joyda declare qilingan
console.log('/*********************************/');

// 12
var greeting = "Hello";
function changeGreeting() {
    var greeting = "Hi";
    console.log(greeting); // What will this print?
}
changeGreeting();
console.log(greeting); // And this?

//Hi chunki greeting local scope da joylashgan va local da chaqirilyapti
// Hello chunki globalda chaqirilyapti
console.log('/*********************************/');

// 13
function example(param = defaultVal) {
    let defaultVal = 10; // Will this cause an error?
    return param;
}
// example();
// ReferenceError chunki log qilinmagan
console.log('/*********************************/');

// 14
let globalVar = "Global";
function outerFunc() {
    let localVar = "Local";
    return function innerFunc() {
        console.log(globalVar, localVar); // Which variables are accessible?
    };
}
outerFunc()();
//Global Local chunki log local scopedagi hamda global scopedagi qiymatlarni olyapti
console.log('/*********************************/');

// 15
console.log(double(5)); // Will this throw an error?
let double = function(x) {
    return x * 2;
};
//ReferenceError chunki log functiondan kegin log bo'lishi kerak
console.log('/*********************************/');

// 16
function hoistExample() {
    var num = 10;
    console.log(num); // What will this print?

}
hoistExample();
console.log('/*********************************/');
// undefined chunki log dan kegin var elon qilingan


// 17
for (const i = 0; i < 3; i++) {
    console.log(i); // Will this work?
}
//TypeError chunki for const bilan elon qilinmaydi
console.log('/*********************************/');


// 18
const obj = {
    name: "JavaScript",
    printName: () => console.log(this.name) // What will `this` refer to?
};
obj.printName();
// undefined 
console.log('/*********************************/');

// 19
function outer() {
    let outerVar = "Outer";
    function middle() {
        let middleVar = "Middle";
        function inner() {
            console.log(outerVar, middleVar); // Which variables are accessible?
        }
        inner();
    }
    middle();
}
outer();
// Outer Middle
console.log('/*********************************/');

// 20

console.log(funcDeclaration()); // Will this work?
console.log(funcExpression()); // Will this throw an error?

function funcDeclaration() {
    return "Function declaration";
}

const funcExpression = function() {
    return "Function expression";
};
// ReferenceError chunki functionlardan oldin chaqirilgan qilingan
















