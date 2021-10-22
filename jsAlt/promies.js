// We solve this problem with Promises!

//////////////
// Promises //
//////////////

/*
    In JavaScript, a promise is an object that returns a value which you hope to receive in the future, but not now.
    Has three states:
    1. Pending: initial state, neither fulfilled nor rejected
    2. Fulfilled: meaning that the operation was completed successfully
    3. Rejected: meaning that the operation failed
*/

let completed = true
let doMyChores = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (completed){
            resolve('I have done my chores')
        } else {
            reject('I have not done my chores')
        }
    }, 3000)
})

// console.log(doMyChores)


// .then() and .catch() methods

function makePromise(completed){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (completed){
                resolve('I have done my chores')
            } else {
                reject('I have not done my chores')
            }
        }, 3000)
    })
}

let cleanTheDishes = makePromise(true);

console.log(cleanTheDishes);

cleanTheDishes.then(v => console.log(v)).catch(err => console.error(err));



function isEven(num){
    return new Promise((resolve, reject) => {
        if (num % 2 == 0){
            resolve(num)
        } else {
            reject(`The number ${num} is not even`)
        }
    })
}


let amEven = isEven(8)

amEven
    .then(res => res**2)
    .then(data => console.log(data))
    .catch(err => console.warn(err))




/////////////////
// Async/Await //
/////////////////


function getUser(userId){
    return new Promise((resolve, reject) => {
        console.log(`Getting user #${userId} from the database`)
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'johnqsample'
            })
        }, 1000);
    })
}

function getUserOrder(user){
    return new Promise((resolve, reject) => {
        console.log(`Getting the orders for ${user.username}`)
        setTimeout(() => {
            resolve([
                {prod: 'Computer', price: 1000},
                {prod: 'Flower', price: 99},
                {prod: 'Hat', price: 25},
            ])
        }, 3000)
    })
}


function getOrderCost(order){
    return new Promise((resolve, reject) => {
        console.log(`Calculating cost of order`)
        setTimeout(() => {
            let total = 0
            for (let item of order){
                total += item.price
            }
            resolve(total)
        }, 3000)
    })
}


getUser(100)
    .then(getUserOrder)
    .then(getOrderCost)
    .then(total => console.log(`Your total is $${total}`))



// Same thing with async await

async function showUserOrder(userId){
    let user = await getUser(userId);
    let order = await getUserOrder(user);
    let total = await getOrderCost(order);
    console.log(`Your total is $${total}`)
}


showUserOrder(500);