// START JQuery
$(document).ready(()=>{
    console.log('Jquery bien installé');
    
    $('#modalRules').css('background','#808080');
    $('#modalNamePlayer').css('background','#808080');
    
    alert('Cliquez sur NewGame pour commencer la partie, pensez à lire les règles du jeu (\'Rules\') avant de commencer !!');
    alert('But du jeu: Le premier qui arrive a 100 points a gagné ;)')
    $('h1').hide();
    $('h1').show(3000);

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

// verifie si nom rentré else the name.value => player1 and player2
function verifName(){
    if(namePlayerOne.value == "" && namePlayerTwo.value == ""){
        namePlayerOne.value = "Player 1"
        playerOne = namePlayerOne.value
        namePlayerTwo.value = "Player 2"
        playerTwo = namePlayerTwo.value
        
    }else{
        addUserName()
    }
};
btnPlay.addEventListener('click', verifName);

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


// random number between 1 and 6
const nbDiceRandom = ()=>{
    return Math.floor(Math.random()*6) + 1;  
} 
// Roll the dice
// on click on rollDice launch function
const resultDice = ()=> {
    
    diceValue = nbDiceRandom();
    switch (diceValue){
        case 1:
            dice.innerHTML ='<img class="face" src="img/dice1.png" alt="Perdu ! Joueur Suivant" title="Perdu ! Joueur Suivant"/><p class="loose">Perdu !</p><span>Joueur suivant</span>';
            break;
        case 2:
            dice.innerHTML = '<img class="face" src="img/dice2.png" alt="">';
            break;
        case 3:
            dice.innerHTML = '<img class="face" src="img/dice3.png" alt="">';
            break;
        case 4:
            dice.innerHTML = '<img class="face" src="img/dice4.png" alt="">';
            break;
        case 5:
            dice.innerHTML = '<img class="face" src="img/dice5.png" alt="">';
            break;
        case 6:
            dice.innerHTML = '<img class="face" src="img/dice6.png" alt="">';
            break;
    }
    if (diceValue === 1) {
        currentPlayer = 0;
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


///////// MODAL WINNER //////

//MODAL WINNER

function winnerPlayer(){
    if (scorePlayerOne >= 100 || scorePlayerTwo >= 100){
        editModalWinner.show();
            if(scorePlayerOne >= 100){
                if(playerOne == "Player 1"){
                    paragrapheWinner.innerText = `Player 1, vous avez gagné !!`;
                }else {
                    paragrapheWinner.innerText = `${playerOne.innerText},  vous avez gagné !!`
                    
                } 
            }
            scorePlayerOne = 0;
            scores[0].textContent = scorePlayerOne;
            playerOne.textContent = "";
            namePlayerOne.value == "";
            if(scorePlayerTwo >= 100){
                if(playerTwo == "Player 2"){
                    paragrapheWinner.innerText =`Player 2, vous avez gagné !!`;
                }else {
                    paragrapheWinner.innerText =`${playerTwo.innerText},  vous avez gagné !!`;
                } 
            }
            scorePlayerTwo = 0;
            scores[1].textContent = scorePlayerTwo;  
            playerTwo.textContent = ""; 
            namePlayerTwo.value == "";    
        }
    };
// btn close modal winner remise a zéro
btnCloseGame.addEventListener('click', ()=>{
    namePlayerOne.textContent = "";
    namePlayerTwo.textContent = "";
    namePlayerOne.value = "";
    namePlayerTwo.value = "";
    playerOne.textContent = "";
    playerTwo.textContent = "";

})
    


