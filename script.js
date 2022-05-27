// TOUT FONCTIONNE MAIS RESTE A FAIRE
// reste à faire :  
//      the function
//      LA PARTIE WINNER >= 100 WINNER
//      LANCER LA MODAL WINNER +> A CREATE
//      faire soit en function soit const = () =>  A REFLECHIR ENCORE et encore
//      image dé
//      revoir le css sur tout sur option game and sur tout


// START JQuery
$(document).ready(()=>{
    console.log('Jquery bien installé');
    
    $('#modalRules').css('background','#808080');
    $('#modalNamePlayer').css('background','#808080');

    $('h1').hide();
    $('h1').show(5000);

}); // end Jquery


    /* function focus + background input */
modalInitPlayer.addEventListener('shown.bs.modal', function () {
    namePlayerOne.focus();
    namePlayerOne.style.background='#5EBEC4';
    namePlayerTwo.style.background='#FAD9E6'
});
    
    /* function modal ask names players   */
function addUserName () {
    playerOne.textContent = namePlayerOne.value[0].toUpperCase() + namePlayerOne.value.substring(1).toLowerCase();
    playerTwo.textContent = namePlayerTwo.value[0].toUpperCase() + namePlayerTwo.value.substring(1).toLowerCase();
};

// verifie si nom rentrer else the name.value => player1 and player2
btnPlay.addEventListener('click', ()=>{
    if(namePlayerOne.value == "" && namePlayerTwo.value == ""){
        namePlayerOne.value = "Player 1"
        playerOne = namePlayerOne.value
            
        namePlayerTwo.value = "Player 2"
        playerTwo = namePlayerTwo.value
    }else{
        addUserName()
    }
})

//Function for player switch 
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

//initialization to Game 

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


// random number between 1 and 6
const nbDiceRandom = ()=>{
    return Math.floor(Math.random()*6) + 1;  
} 
// Roll the dice
// on click on rollDice launch function
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

////// on click on hold /////
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




