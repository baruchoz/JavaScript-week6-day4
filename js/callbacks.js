// JavaScript Callback Function
/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

let numbers = [23, 53, 22, 53, 7, 4, 35, 65, 22, 46, 88, 546, 4]

function isEven(num){
    return num % 2 == 0
}

console.log(
    numbers.filter(isEven)
)
// isEven is the callback function


function buttonClicked(){
    console.log('The button has been clicked')
}


let btn = document.getElementById('btn')
btn.addEventListener('click', () => {console.log('Hello World!')})


// Async Example


// function first(){
//     console.log('First started')
//     setTimeout(
//         () => {console.log('First')}, 
//         3000
//     )
// }

// function second(){
//     console.log('Second Started')
//     console.log('Second')
// }


// first();
// second();


// function downloadSong(songName){
//     console.log(`Starting download of ${songName}...`)
//     setTimeout(() => {
//         // Script to download the song
//         console.log(`Finished downloading ${songName}`)
//     }, 3000)
//     return songName
// }


// function playSong(song){
//     console.log(`Playing ${song}...`)
// }


// let song = downloadSong('Single Ladies');
// playSong(song);


function downloadSong(songName, callback){
    console.log(`Starting download of ${songName}...`)
    setTimeout(() => {
        // Script to download the song
        console.log(`Finished downloading ${songName}`)
        // Execute callback once finished downloading
        callback(songName)
    }, 3000)
    return songName
}


function playSong(song){
    console.log(`Playing ${song}...`)
}


// downloadSong('Single Ladies', playSong);

// downloadSong('Hey Ya!', (s) => {console.log(`Sending ${s} to friend`)});



let song1 = 'Wonderwall';
let song2 = 'Brown-Eyed Girl';
let song3 = 'Dreams';


// downloadSong(song1, (s) => {
//     console.log(`Saving ${s} to file`);
//     downloadSong(song2, (s) => {
//         console.log(`Saving ${s} to file`);
//         downloadSong(song3, (s) => {
//             console.log(`Saving ${s} to file`)
//         })
//     })
// })


/*
    Though Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell
    
    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷
                })
            })
        })
    })
*/

// Handling Errors

function downloadSong2(songName, callbackSuccess, callbackFail){
    console.log(`Starting download of ${songName}...`)
    setTimeout(() => {
        // Script to download the song
        console.log(`Finished downloading ${songName}`)

        // Fake error simulation
        let isValid = songName.length != 0;
        // Execute callback once finished downloading
        isValid ? callbackSuccess(songName) : callbackFail(songName)
    }, 3000)
    return songName
}


downloadSong2('abc', 
(s) => {console.log('Downloaded!!', s)}, 
(s) => {console.log('Failure', s)}
)