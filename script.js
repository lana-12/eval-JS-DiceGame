$(document).ready(()=>{
    console.log('Jquery bien installé')
    
    
    // //au chargement page modal regle
    // $('#modal').modal('show')
    // $('h1').hide();
    // $('h1').show(7000);
    
})

//lier au dom
let newGames = document.getElementById('newGames');
// a voir pour au click les regles s'affiche ou id= modal
let rules = document.getElementById('rules');
// test
let playerOne = document.getElementById('playerOne');



// initialize the players
let userPlayerOne = document.getElementById('userPlayerOne');
let userplayerTwo = document.getElementById('userplayerTwo');

// initialize round players
let roundPlayerOne = document.getElementById('roundPlayerOne');
let currentPlayerOne = document.getElementById('currentPlayerOne');

//initialize current players
let roundPlayerTwo = document.getElementById('roundPlayerTwo');
let currentplayerTwo = document.getElementById('currentplayerTwo');


function test(){
    playerOne.style.color ='yellow'
}
playerOne.addEventListener('click',test )


