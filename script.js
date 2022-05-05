$(document).ready(()=>{
    console.log('Jquery bien installé')
    
    
    // au chargement page modal regle + background
    $('#modal').modal('show').css('background','#8e9483');
    //background modal2
    let modal2 = $('#modal2');
    modal2.modal().css('background','#8e9483');
    
    // // a revoir animation sur titre s'affiche qd close modal2 
    $('h1').hide();
    $('h1').delay(7000).fadeIn(4000);
    
})
/* color blue = #5EBEC4  */
/* color pink = #FDF5DF   */
/* background-color: #8e9483;  */

// init modal + btn play
const btnPlay = document.getElementById('play');
const modalInitPlayer = document.getElementById('modal2')

// initialize the players test
const namePlayerOne = document.getElementById('userNamePlayer1');//input
const namePlayerTwo = document.getElementById('userNamePlayer2');//input
let playerOne = document.getElementById('playerOne');//p
let playerTwo = document.getElementById('playerTwo');//p
const input = document.getElementsByClassName('labelPlayer');


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
    // animationTitle() en cour
    // modalInitPlayer.style.display = 'none'; //a verifier si je met display
})
// }
modalInitPlayer.addEventListener('shown.bs.modal', function () {
    namePlayerOne.focus()
    //Ne marche pas a revoir
    //namePlayerOne.target.style.background = 'color blue = #5EBEC4'
})
///// faire une animation au clic sur button play le titre arrive....
//   modalInitPlayer.addEventListener('hidden.bs.modal', function (event) {
//     const h1 = document.getElementById('titreDiceGame');
//     h1.style.boxShadow();
//   })




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

