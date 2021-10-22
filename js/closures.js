// Refresh on Scope

let subject = 'JavaScript'  // global variable


function homework(student){
    // let student = 'Baruch';  // local block level variable
    console.log(`${student}, did you do your ${subject} homework?`)
}


homework('Baruch');

// console.log(student); // Error - student is not defined


// Scopes can be nested

// function outer(){
//     let outerMessage = 'This is the outer message!';
//     function inner(){
//         // let innerMessage = 'This is the inner message'
//         console.log(outerMessage);
//     }

//     inner()
// }


// outer();

// Return a function from a function

function outer(){
    let outerMessage = 'This is the outer message!';
    function inner(){
        console.log(outerMessage);
    }

    return inner
}

let outerReturn = outer();

// console.log(outerReturn);


outerReturn();


// inner() function is a closure
// A closure is a function that preserves the outer scope in its inner scope


// A more practical example


function multiplier(x){
    function times(y){
        return x * y
    }
    return times
}

const double = multiplier(2);

console.log(double)

console.log(double(3))
console.log(double(5))

const triple = multiplier(3);

console.log(triple);

console.log(triple(3))
console.log(triple(5))

// For this example, we will add to a number after the initial call to the
// closure has been made

function example(step=1){
    let counter = 0;
    console.log(`Example function has been executed and counter has been set: ${counter}`)
    function closureFunc(){
        counter+=step
        console.log(`closureFunc has been executed. Counter: ${counter}`)
    }
    return closureFunc
}


let ex1 = example();

ex1();
ex1();
ex1();
ex1();
ex1();
ex1();
ex1();
ex1();
ex1();

let ex2 = example(2);

ex2();
ex2();
ex2();
ex2();
ex2();
ex2();
ex2();


// IIFE - immediately invoked function expression


const stepCounter = (function(step=1){
    let counter = 0;
    const insideFunc = function(){return counter += step}
    return insideFunc
})(5)

console.log(stepCounter);
console.log(stepCounter())
console.log(stepCounter())
console.log(stepCounter())
console.log(stepCounter())
console.log(stepCounter())


// Below is the same thing as above but in more steps

let stepCounterCreator = function(step=1){
    let counter = 0;
    const insideFunc = function(){return counter += step}
    return insideFunc
}

let countByFive = stepCounterCreator(5)

console.log(countByFive())
console.log(countByFive())
console.log(countByFive())
console.log(countByFive())
console.log(countByFive())