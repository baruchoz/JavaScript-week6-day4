console.log(document.getElementsByTagName('h1'));

let secondHeader = document.getElementsByTagName('h1')[1];
console.log(secondHeader);

secondHeader.innerHTML = 'New Text';


testHeaders = document.getElementsByClassName('test');
console.log(testHeaders);

idHeader = document.getElementById('coolOne');
console.log(idHeader);

idHeaderAgain = document.querySelectorAll('.test');
console.log(idHeaderAgain);


// Set up the button to change the background color of the coolOne Header

// Get the button
let colorButton = document.getElementById('btn');
console.log(colorButton);

// Define my callback function to execute on button click

const colorChange = () => {
    let myHeader = document.getElementById('coolOne')
    if (myHeader.className === ''){
        myHeader.className = 'color'
    } else {
        myHeader.className = ''
    }
}

// colorButton.addEventListener('click', colorChange);


// More event listeners
let anotherHeader = document.getElementsByClassName('test')[1];

anotherHeader.addEventListener('mouseenter', () => anotherHeader.innerHTML = 'Test 123');
anotherHeader.addEventListener('mouseleave', () => anotherHeader.innerHTML = 'Bye bye!');


// Using JavaScript to Create HTML Elements
// Add a new button

let myNewButton = document.createElement('button');
myNewButton.style = "color: green; padding: 20px; display: block; margin-top: 15px;"
myNewButton.innerHTML = 'I AM ALIVE!'

document.body.append(myNewButton);


// Use this new button to create more H2 elements

myNewButton.addEventListener('click', ()=>{
    let moreText = document.createElement('h2');
    moreText.innerHTML = prompt('What would you like to display?');
    moreText.className = 'color';
    document.body.append(moreText);
})


// Grab Data from a form after submit

const form = document.getElementById('testDataForm');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log('Form submitted');
    console.log(e);
    let firstName = e.target.first.value
    let lastName = e.target.last.value
    console.log(firstName, lastName);
    // Grab the data from the document
    let firstNameAgain = document.getElementById('firstName').value;
    let lastNameAgain = document.getElementById('lastName').value;
    console.log(firstNameAgain, lastNameAgain);
})


const getPokemon = async function(pokeName){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    let data = await response.json()
    return data
}


const pokeForm = document.getElementById('pokeForm');

pokeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let poke = e.target.pokeName.value;
    console.log(poke);
    let pokemon = await getPokemon(poke)

    let newHeader = document.createElement('h1');
    newHeader.innerHTML = pokemon.name
    let subHeader = document.createElement('h5');
    subHeader.innerHTML = `Height: ${pokemon.height} Weight: ${pokemon.weight}`

    document.body.append(newHeader);
    document.body.append(subHeader);
})