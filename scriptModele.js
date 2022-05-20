$(document).ready(()=>{
    console.log('Jquery bien installé')
    
    // au chargement page modal regle + background
    $('#modal').modal('show').css('background','#808080');

    //background modal2
    let modal2 = $('#modal2');
    modal2.modal().css('background','#808080');

    // Title display to close modal2
    $('#start').click(function(){
        $('h1').hide();
        $('h1').show(5000);
    });
    
    //Ouverture lien Modal Rules
    $('#rules').click(function(){
        $('#modal').modal('show')
    });
    //Ouverture lien Modal NewGame
    $('#newGame').click(function(e){
        modal2.modal('show')
    });

});

// add element //

// init modal + btnModal2 play
const btnPlay = document.getElementById('play');
const modalInitPlayer = document.getElementById('modal2')

// initialize the players 
const namePlayerOne = document.getElementById('userNamePlayer1');//input
const namePlayerTwo = document.getElementById('userNamePlayer2');//input
let playerOne = document.getElementById('playerOne');//p
let playerTwo = document.getElementById('playerTwo');//p
const input = document.getElementsByClassName('labelPlayer');

//initialize ActualPlayer + son Style
const player = document.querySelectorAll('.player');
const main = document.querySelector('main');
const color1 = document.querySelector('.player1')
const color2 = document.querySelector('.player2')

//initialize rules and newgame
let newGames = document.getElementById('newGames');
let rules = document.getElementById('rules');

//initialize option game
let rollDice = document.getElementById('rollDice');
let hold = document.getElementById('hold');

// initialize round players
let currentPlayerOne = document.getElementById('currentPlayerOne');
let currentPlayerTwo = document.getElementById('currentPlayerTwo');

//initialize score players
let scorePlayerOne = document.getElementById('scorePlayerOne');
let scorePlayerTwo = document.getElementById('scorePlayerTwo');

//initialize current and scoreTotal => pour les deux players
let currents = document.querySelectorAll('.current');
let scores = document.querySelectorAll('.scoreTotal');

///////////////////////////////////////////////////////////

// add event focus to input 
modalInitPlayer.addEventListener('shown.bs.modal', function () {
    namePlayerOne.focus();
    namePlayerOne.style.background='#5EBEC4';
    namePlayerTwo.style.background='#FAD9E6'
})

/*   Initialize Game*/ // chaque new function à ajouter ds l'ordre
// const playGame = ()=>{
//     modalUserName(),
//     initGame(),
//     resultDice(),
//     save()

// };

/* function players modal  */
// const addUserName = () => {
    btnPlay.addEventListener('click', () =>{
        playerOne.textContent = namePlayerOne.value[0].toUpperCase() + namePlayerOne.value.substring(1).toLowerCase();
        playerTwo.textContent = namePlayerTwo.value[0].toUpperCase() + namePlayerTwo.value.substring(1).toLowerCase();
})
// }


///////////////////////////////////////////////////////////////////



//Function for switch player

const switchPlayer1 = ()=>{
    player[0].style.background='#5EBEC4';
    player[1].style.background='#FAD9E6';
    color1.style.color ='#FAD9E6';
    color2.style.color ='#5EBEC4 ';
    actualPlayer = 0;
};
const switchPlayer2 = ()=>{
    player[1].style.background='#5EBEC4';
    player[0].style.background= '#FAD9E6';
    color2.style.color = '#FAD9E6';
    color1.style.color ='#5EBEC4';
    actualPlayer = 1;
    
};


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
// au clic sur rollDice lance function 
const resultDice = ()=> {
    diceValue = nbDiceRandom();
    console.log( ' le nombre du dé est '  + diceValue);
    if (diceValue === 1) {
        console.log('vous avez perdu');
        currentPlayer = 0;
        console.log('vous etes à '+ currentPlayer);
        if(actualPlayer == 0){
            currents[0].textContent = currentPlayer;
            switchPlayer2();
        }else{
            currents[1].textContent = currentPlayer;
            switchPlayer1();
        }
    } else {
        currentPlayer += diceValue;
        currents[actualPlayer].textContent = currentPlayer; 
    }
};
rollDice.addEventListener('click', resultDice);
//verification nom joueur
// const verificationUserName = ()=>{

// }
// roll.addEventListener("click", () => {
//     if (playerOne.textContent !== "") {
//         rollDice()
//     } else {
//         init()
//     }
// });

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
        // winnerPlayer();
    };
hold.addEventListener('click', save)

const modalWinner = document.getElementById('modalWinner');
// function winner
// const winnerPlayer = () =>{
//     if (scorePlayerOne >= 100 || scorePlayerTwo >= 100){
//         modalWinner.style.display ='block';
// }
// }
// playGame()