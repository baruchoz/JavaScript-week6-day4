// Refresher on scope

let subject = 'JavaScript'; // global variable

function homework(student){
    // let student = 'Brian' // local block variable
    console.log(`${student}, did you do your ${subject} homework?`)
}

homework('Brian');

// console.log(student); // Error



// Scopes can be nested

// function outer(){
//     let outerMessage = 'This is the outer message'
//     function inner(){
//         console.log(outerMessage)
//     }

//     inner()
// }

// outer()


function outer(){
    let outerMessage = 'This is the outer message'
    function inner(){
        console.log(outerMessage)
    }

    return inner
};

let outerReturn = outer();

outerReturn();
// console.log(outerMessage);

// The inner() is a closure
// A closure is a function that preserves the outer scope in its inner scope.

// JavaScript Closures
/*
    A Closure is a self-invoking function that only runs once.
    It can then set a variable and returns a function expression.

*/

// Another Example
function multiplier(x){
    return function times(y){
        return x * y;
    }
}

const double = multiplier(2);
const triple = multiplier(3);
const quadruple = multiplier(4);


console.log(double(3));
console.log(double(5));
console.log(triple(3));
console.log(triple(5));
console.log(quadruple(3));
console.log(quadruple(5));


// For this example, we will add to a number after the inital call to the closure has been made.

function example(step=1){
    let counter = 0;
    console.log('Example function has been executed and counter has been set:', counter)
    const closureFunc = function(){
        counter += step
        console.log('closureFunc being executed', counter)
    }
    return closureFunc
}

let a = example();

a()
a()

let b = example(2)

b()
b()


const stepCounter = (function(step=1){
    let counter = 0;
    const insideFunc = function(){return counter += step}
    return insideFunc
})()

console.log(stepCounter);
console.log(stepCounter());




