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


let numbers = [24, 33, 5, 224, 31, 23, 54, 234, 236, 237, 2]

function isEven(num){
    return num % 2 == 0;
}

console.log((numbers.filter(isEven)));

// isEven is a callback function. We pass the reference to another function 

// function buttonClicked(){
//     console.log('The button has been clicked!')
// }

// let btn = document.getElementById('btn');
// btn.addEventListener('click', buttonClicked);


///////////
// Async //
///////////

// Synchronous example
function first(){
    console.log('FIRST')
};

function second(){
    console.log('SECOND')
}

// first();
// second();
console.clear()

// function downloadSong(songName){
//     console.log(`Starting download of ${songName}`)
//     setTimeout(() => {
//         // Script that downloads the song
//         console.log(`Finised downloading ${songName}...`)
//     }, 3000)
//     return songName
// }

// function playSong(song){
//     console.log(`Playing ${song}`)
// }


// let requestedSong = 'Hey Ya!'

// song = downloadSong(requestedSong);
// playSong(song);


function downloadSong(songName, callback){
    console.log(`Starting download of ${songName}...`)
    setTimeout(() => {
        // Script that downloads the song
        console.log(`Finised downloading ${songName}...`)
        
        // what to do with song once it is completed
        callback(songName)
    }, 3000)
    return songName
}

// function playSong(song){
//     console.log(`Playing ${song}`)
// }

console.clear();

let requestedSong = 'Hey Ya!'

// downloadSong(requestedSong, playSong);

// downloadSong(requestedSong, (song) => {
//     console.log(`Playing ${song}`)
// })



let song1 = 'Wonderwall';
let song2 = 'Brown Eyed Girl';
let song3 = 'Dreams';

downloadSong(song1, (song) => {
    console.log(`Playing ${song}`);
    downloadSong(song2, (song) => {
        console.log(`Playing ${song}`);
        downloadSong(song3, (song) => {
            console.log(`Playing ${song}`);
        })
    })
})


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
        // Script that downloads the song
        console.log(`Finised downloading ${songName}...`)
        
        // Fake error
        let error = songName.length != 0;
        // what to do with song once it is completed
        error ? callbackSuccess(songName) : callbackFail(songName)
    }, 3000)
    return songName
}

downloadSong2(requestedSong, (s) => {console.log(`Playing ${s}`)}, (s) => console.log(`There was an issue trying to download ${s}`))