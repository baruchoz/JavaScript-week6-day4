// Callback Hell Problem is solved with Promises!


/*
    In JavaScript, a promise is an object that returns a value which you hope to receive in the future, but not now.
    Has three states:
    1. Pending: initial state, neither fulfilled nor rejected
    2. Fulfilled: meaning that the operation was completed successfully
    3. Rejected: meaning that the operation failed
*/


// let completed = false;

// let doMyChores = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (completed){
//             resolve('I did my chores')
//         } else {
//             reject('Chores were not completed')
//         }
//     }, 3000)
// })


// console.log(doMyChores);


// let abc = doMyChores
//     .then((v) =>{
//         console.log(v.toUpperCase())
//         return v + '!!!!!!'
//     })
//     .then(data => {console.log(data);return data})
//     .catch((err) => {
//         console.log(err.toUpperCase())
//         return err + '!!!!!!'
//     })
//     .finally(() => console.log('Promise over'));
    

// console.log(abc);


// Another Example

function isEven(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 2 == 0){
                resolve(num)
            } else {
                reject(`The number ${num} is not even`)
            }
        }, 3000)
    })
}


let myNum = isEven(14);


// myNum.then(v => v**2)
// .then(data => console.log(data))
// .catch(e => console.error(e))


// Example: Get the price of a user's order based on user id
// userId -> user -> user's order -> calculate order

function getUser(userId){
    return new Promise((resolve, reject) => {
        console.log(`Getting user #${userId} from the database`)
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'johnqsample'
            })
        }, 1000)
    })
}

function getUserOrder(user){
    return new Promise((resolve, reject) => {
        console.log(`Getting the orders for ${user.username}`)
        setTimeout(() => {
            // resolve([
            //     {prodName: 'Computer', price: 1000},
            //     {prodName: 'Flower', price: 20},
            //     {prodName: 'T-shirt', price: 25}
            // ])
            reject('This user has no order')
        }, 1000)
    })
}


function getOrderTotal(order){
    return new Promise((resolve, reject) => {
        console.log('Calculating...')
        setTimeout(() => {
            let total = 0
            for (let item of order){
                total += item.price
            }
            resolve(total)
        }, 1000)
    })
}


// getUser(644)
//     .then(getUserOrder)
//     .then(getOrderTotal)
//     .then(total => console.log(`Your total is $${total}`))



// Async Await
// user = getUser(644)
// order = getUserOrder(user)
// total = getOrderTotal(order)


async function getUserTotal(userId){
    try{
        let user = await getUser(userId)
        let order = await getUserOrder(user)
        let total = await getOrderTotal(order)
        console.log(`Your total is $${total}`)
    } catch(error) {
        console.error(error)
    }
}

getUserTotal(45);
