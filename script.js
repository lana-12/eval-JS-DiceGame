$(document).ready(()=>{
    console.log('Jquery bien installé')
    
    
    // // au chargement page modal regle + background
    // $('#modal').modal('show').css('background','#8e9483');
    // //background modal2
    // let modal2 = $('#modal2');
    // modal2.modal().css('background','#8e9483');
    
    // // a revoir animation sur titre s'affiche qd close modal2 
    // $('h1').hide();
    // $('h1').delay(7000).fadeIn(4000);
    
});
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


/*   Initialize Game*/ // chaque new function à ajouter ds l'ordre
// const playGame = ()=>{
//     modalUserName()
//     initGame()
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

///////////////////////////////////////////////////////////////////

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

//initialize current and scoreTotal => pour les deux players
let currents = document.querySelectorAll('.current');
let scores = document.querySelectorAll('.scoreTotal');

//initialize ActualPlayer + son Style
const player = document.querySelectorAll('.player');
const main = document.querySelector('main');
const color1 = document.querySelector('.player1')
const color2 = document.querySelector('.player2')

//Function for switch player
/* color blue = #5EBEC4  */
/* color pink = #FAD9E6   */

const switchPlayer1 = ()=>{
    player[0].setAttribute('class', 'active');
    player[1].removeAttribute('class', 'active');
    main.style.background='linear-gradient(to bottom, #5EBEC4 50%, #FAD9E6 50%)';
    color1.style.color ='#FAD9E6';
    color2.style.color ='#5EBEC4 ';
    actualPlayer = 0;
};
const switchPlayer2 = ()=>{
    player[1].setAttribute('class', 'active');
    player[0].removeAttribute('class', 'active');
    main.style.background='linear-gradient(to bottom, #FAD9E6 50%, #5EBEC4 50%)';
    color2.style.color = '#FAD9E6';
    color1.style.color ='#5EBEC4';
    actualPlayer = 1;
}

//initialisation to Game
// const initGame = () =>{
    currentPlayerOne = 0;
    scorePlayerOne = 0;
    
    currentPlayerTwo = 0;
    scorePlayerTwo = 0;
    
    let actualPlayer = 0;
    let currentPlayer = 0;
    let diceValue = 0;

    currents.forEach((current) =>{
        current.textContent = 0;
    });
    scores.forEach((score) =>{
        score.textContent = 0;
    });
    switchPlayer1(); 

    // a mettre img dé ici + create const ou class img face dé
// }

// nbre aleatoire entre 1 et 6
const nbDiceRandom = ()=>{
    return Math.floor(Math.random()*6) + 1;  
} 
// Lancer les dés 
const resultDice = ()=>{
    diceValue = nbDiceRandom();
    console.log( ' le nombre du dé est '  + diceValue);
    if (diceValue === 1) {
        console.log('vous avez perdu');
        currentPlayer = 0;
        console.log('vous etes à '+ currentPlayer);
        if(actualPlayer == 0){
            currents[0].textContent = 'Perdu' ;
            switchPlayer2();
        }else{
            currents[1].textContent = 'Perdu' ;
            switchPlayer1();
        }
    } else {
        currentPlayer += diceValue;
        currents[actualPlayer].textContent = currentPlayer; 
    }
};
// au clic sur rollDice lance function 
rollDice.addEventListener('click', resultDice);

////// au clic sur hold /////


const save =() =>{
    if(actualPlayer == 0){
        scorePlayerOne += currentPlayer;
        scores[0].textContent = scorePlayerOne;
        currentPlayer = 0;
        currents[0].textContent = currentPlayer;
        switchPlayer2();
    } else{
        scorePlayerTwo += currentPlayer;
        scores[1].textContent = scorePlayerTwo;
        currentPlayer = 0;
        currents[1].textContent = currentPlayer;
        switchPlayer1();
    }
    winnerPlayer();
}
hold.addEventListener('click', save);

// function winner