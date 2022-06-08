/************* Initialisation variable ******************/

// init modal + btn play
const modalInitPlayer = document.getElementById('modalNamePlayer')
const modalRules = document.getElementById('modalRules')
const btnPlay = document.getElementById('play');
const btnStart = document.getElementById('start');




// init newGames and Rules
const newGames = document.getElementById('newGames');
const rules = document.getElementById('rules');

// initialize the players 
let namePlayerOne = document.getElementById('userNamePlayer1');//input
let namePlayerTwo = document.getElementById('userNamePlayer2');//input
let playerOne = document.getElementById('playerOne');//p
let playerTwo = document.getElementById('playerTwo');//p
const input = document.getElementsByClassName('labelPlayer');

//initialize option game
const rollDice = document.getElementById('rollDice');
const hold = document.getElementById('hold');

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

const color1 = document.querySelector('.player1')
const color2 = document.querySelector('.player2')
