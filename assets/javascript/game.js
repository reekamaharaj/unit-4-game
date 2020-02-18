// variables
let score = 0;
let win = 0;
let loss = 0;
let gamesPlayed = 0;

let randomNumber = 0;
let gem1Value = 0;
let gem2Value = 0;
let gem3Value = 0;
let gem4Value = 0;

var playButton;
var resetButton;

var audioElementWin = document.createElement("audio");
audioElementWin.setAttribute("src", "assets/sounds/arcade-game-fruit-machine-jackpot-001-short.mp3");

var audioElementLoss = document.createElement("audio");
audioElementLoss.setAttribute("src", "assets/sounds/zapsplat_cartoon_fail_trumpet_wah_002_45242.mp3");

var audioElementGem = document.createElement("audio");
audioElementGem.setAttribute("src", "assets/sounds/noisecreations_SFX-NCFREE02_Flabby-Burd.mp3");
//calling functions for game play

$(document).ready(function(){
    $("#play").click(gameStart);
    $("#reset").click(reset);
    $("#gem1").click(gem1);
    $("#gem2").click(gem2);
    $("#gem3").click(gem3);
    $("#gem4").click(gem4);
    $('#randomNumber').text(randomNumber);
    $('#score').text(score);
    $('#win').text(win);
    $('#loss').text(loss);
    $('#gamesPlayed').text(gamesPlayed);
});

//functions
function gem1(){
    if (score < randomNumber){
        

    } else if (score === randomNumber) {

    } else {

    }
    console.log(gem1Value);
}

function gem2(){
    console.log(gem2Value);
}

function gem3(){
    console.log(gem3Value);
}

function gem4(){
    console.log(gem4Value);
}

function gameStart(){
    randomNumber = pickRandom(19, 121); 
    gem1Value = pickRandom(1, 13);
    gem2Value = pickRandom(1, 13);
    gem3Value = pickRandom(1, 13);
    gem4Value = pickRandom(1, 13);
    $('#randomNumber').text(randomNumber);
    $('#score').text(score);
    $('#win').text(win);
    $('#loss').text(loss);
    $('#gamesPlayed').text(gamesPlayed);
    console.log("start");
}

function reset(){
    console.log("reset");
    score = 0;
    randomNumber = 0;
    gem1Value = 0;
    gem2Value = 0;
    gem3Value = 0;
    gem4Value = 0;

function pickRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

// - [x] Player will have to get to a specific number
// - [x] Four crystals that are buttons
// - [x] Need images for the crystals
// - [x] At the start of the game a random number will be shown 
// - [x] Player will click a crystal
// - [x] Crystal will be worth a certain amount of points
// - [ ] points are added to the players total score
// - [x] The player is not aware of how much the crystals are worth until the crystal is clicked (they won't be shown anything other than their score, they would have to do mental math to know the crystal values)
// - [ ] Player wins when the random number and the players score are equal. 
// - [ ] The player loses if thier score is higher than the random number
// - [ ] Game restarts when the player wins or loses
// - [x] At the start of a new game a new random number will be shown
// - [x] Crystals will have new values that are hidden to the player
// - [x] player's score and score counter will reset to 0
// - [ ] Number of games played should be shown, wins and loses
// - [x] Game reset is not dependant on the page being reloaded
// - [x] Random number should be between 19 and 120
// - [x] Crystals will have a random hidden value between 1-12

// Exta stuff
// - [ ] Sound for when clicking gem, clink
// - [ ] Sound at loss
// - [ ] Sound at win (ff fanfare :3)
// - [ ] Reset button

