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
/* color blue = #5EBEC4  */
/* color pink = #FDF5DF   */
/* background-color: #808080;  */

// init modal + btn play
const btnPlay = document.getElementById('play');
const modalInitPlayer = document.getElementById('modal2')

// initialize the players test
const namePlayerOne = document.getElementById('userNamePlayer1');//input
const namePlayerTwo = document.getElementById('userNamePlayer2');//input
const playerOne = document.getElementById('playerOne');//p
const playerTwo = document.getElementById('playerTwo');//p
const input = document.getElementsByClassName('labelPlayer');


/*   Initialize Game*/ // chaque new function à ajouter ds l'ordre
// const playGame = ()=>{
//     modalUserName(),
//     initGame(),
//     resultDice(),
//     save()

// };



//initialize option game
const rollDice = document.getElementById('rollDice');
const hold = document.getElementById('hold');

/* function players modal  */
function addUserName () {
        playerOne.textContent = namePlayerOne.value[0].toUpperCase() + namePlayerOne.value.substring(1).toLowerCase();
        playerTwo.textContent = namePlayerTwo.value[0].toUpperCase() + namePlayerTwo.value.substring(1).toLowerCase();
        
};
btnPlay.addEventListener('click', addUserName);

modalInitPlayer.addEventListener('shown.bs.modal', function () {
    namePlayerOne.focus();
    namePlayerOne.style.background='#5EBEC4';
    namePlayerTwo.style.background='#FAD9E6'
})

///////////////////////////////////////////////////////////////////

//lier au dom
const newGames = document.getElementById('newGames');
// a voir pour au click les regles s'affiche ou id= modal
const rules = document.getElementById('rules');

// initialize round players
let currentPlayerOne = document.getElementById('currentPlayerOne');
let currentPlayerTwo = document.getElementById('currentPlayerTwo');

//initialize score players
let scorePlayerOne = document.getElementById('scorePlayerOne');
let scorePlayerTwo = document.getElementById('scorePlayerTwo');

//initialize current and scoreTotal => pour les deux players
const currents = document.querySelectorAll('.current');
const scores = document.querySelectorAll('.scoreTotal');

//initialize ActualPlayer + son Style
const player = document.querySelectorAll('.player');
const main = document.querySelector('main');
const color1 = document.querySelector('.player1')
const color2 = document.querySelector('.player2')

//Function for switch player
/* color blue = #5EBEC4  */
/* color pink = #FAD9E6   */

const switchPlayer1 = ()=>{
    // player[0].setAttribute('class', 'active');
    // player[1].removeAttribute('class', 'active');
    player[0].style.background='#5EBEC4';
    player[1].style.background='#FAD9E6';
    color1.style.color ='#FAD9E6';
    color2.style.color ='#5EBEC4 ';
    actualPlayer = 0;
};
const switchPlayer2 = ()=>{
    // player[1].setAttribute('class', 'active');
    // player[0].removeAttribute('class', 'active');
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

// }



    
    // a mettre img dé ici + create const ou class img face dé
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
    };
hold.addEventListener('click', save)


// je suis sur la modal
const textWinner = document.getElementById('textWinner')
const modalWinner = document.getElementById('modalWinner');



// reste à faire la modal winner + la fonction
// faire function initGame + nettoyer le code
// faire soit en function soit const = () =>
// verifier la saisie des username
// revoir le css sur tout sur option game

// function exemple() {
//     modalWinner.style.visibility = (modalWinner.style.visibility == "visible") ? "hidden" : "visible";
//     }

// // function winner
// const winnerPlayer = () =>{
//     if(scorePlayerOne >= 10 || scorePlayerTwo >=10){
//         console.log('gagné');
//     exemple();


//     //     modalWinner.style.
//     //     if(actualPlayer == 0 || namePlayerOne !== ""){
//     //         textWinner.textContent = `${playerOne} vous avez gagné`;
//     //     }else{
//     //         textWinner.textContent = `Player 1, vous avez gangé`;
//     //     }if (actualPlayer == 1 || namePlayerTwo !== "") {
//     //         textWinner.textContent = `${playerTwo} vous avez gagné`;
//     //     }else{
//     //         textWinner.textContent = `Player 2, vous avez gangé`;
//     //     }
//   }
// }

// playGame()