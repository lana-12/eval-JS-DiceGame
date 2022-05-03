$(document).ready(()=>{
    console.log('Jquery bien installé')
    
    
    // //au chargement page modal regle
    $('#modal').modal('show')
    // // a revoir animation sur titre voir si pas possible sur 
    $('h1').hide();
    $('h1').delay(7000).fadeIn(4000);
    
})

// initialize the players test
const namePlayerOne = document.getElementById('userNamePlayer1');//input
const namePlayerTwo = document.getElementById('userNamePlayer2');//input
let playerOne = document.getElementById('playerOne');//p
let playerTwo = document.getElementById('playerTwo');//p
const input = document.getElementsByClassName('labelPlayer');

// init modal
const btnPlay = document.getElementById('play');
const modalInitPlayer = document.getElementById('modal2')

//reste à faire const ou class pour img face de dé

/*   Initialize Game*/ // chaque new function à ajouter ds l'ordre
// const playGame = ()=>{
//     modalUserName()
// }


/* function players modal mettre celui-la */
// const modalUserName = () => {
    btnPlay.addEventListener('click', () =>{
        playerOne.textContent = namePlayerOne.value[0].toUpperCase() + namePlayerOne.value.substring(1).toLowerCase();
        playerTwo.textContent = namePlayerTwo.value[0].toUpperCase() + namePlayerTwo.value.substring(1).toLowerCase();
    // nom de la function suivnate ' L'animation'
    animationTitle()
    // modalInitPlayer.style.display = 'none'; //a verifier si je met display
})
// }


///// faire une animation au clic sur button play le titre arrive....
const title = document.getElementById('titreDiceGame');
const animationTitle = () =>{
    title.addEventListener('load',(ev)=>{
        ev.target.style.color = 'red'
    })
}


//lier au dom
let newGames = document.getElementById('newGames');
// a voir pour au click les regles s'affiche ou id= modal
let rules = document.getElementById('rules');

// initialize round players
let currentPlayerOne = document.getElementById('currentPlayerOne');
let currentPlayerTwo = document.getElementById('currentPlayerTwo');

//initialize score players
let scorePlayerOne = document.getElementById('scorePlayerOne');
let scorePlayerTwo = document.getElementById('scorePlayerTwo');

//initialize option game

let rollDice = document.getElementById('rollDice');
let hold = document.getElementById('hold');


//initialisation des variables 
let diceValue = 0;
let roundPlayer = 0;
currentPlayerOne = 0;
currentPlayerTwo = 0;
scorePlayerOne = 0;
scorePlayerTwo = 0;
// au clic sur rollDice nbre aleatoire entre 1 et 6
function roll () {
    
    diceValue = Math.floor(Math.random()*6) + 1;
    console.log(diceValue);
    if (diceValue === 1) {
        console.log('Vous avez perdu !!!!!!')
// switcher avec l'autre player
    } else  {
        roundPlayer += diceValue;
        currentPlayerOne += roundPlayer
        console.log(`current score : ${currentPlayerOne}` );
        
    }
}; 
roll()
roll()
roll()
roll()
roll()
roll()
roll()

