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
        score = score + gem1Value;
        $('#score').text(score);
        audioElementGem.play();

    } else if (score === randomNumber) {
        gameWin();
    } else {
        gameLose();
    }
}

function gem2(){
    if (score < randomNumber){
        score = score + gem2Value;
        $('#score').text(score);
        audioElementGem.play();

    } else if (score === randomNumber) {
        gameWin();
    } else {
        gameLose();
    }
}

function gem3(){
    if (score < randomNumber){
        score = score + gem3Value;
        $('#score').text(score);
        audioElementGem.play();

    } else if (score === randomNumber) {
        gameWin();
    } else {
        gameLose();
    }
}

function gem4(){
    if (score < randomNumber){
        score = score + gem4Value;
        $('#score').text(score);
        audioElementGem.play();

    } else if (score === randomNumber) {
        gameWin();
    } else {
        gameLose();
    }
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
}

function gameWin() {
    audioElementWin.play();
    win++;
    gamesPlayed++;
    reset();
    
}

function gameLose(){
    audioElementLoss.play();
    loss++;
    gamesPlayed++;
    reset();
}

function reset(){
    score = 0;
    gameStart();
}

function pickRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

// - [x] Player will have to get to a specific number
// - [x] Four crystals that are buttons
// - [x] Need images for the crystals
// - [x] At the start of the game a random number will be shown 
// - [x] Player will click a crystal
// - [x] Crystal will be worth a certain amount of points
// - [x] points are added to the players total score
// - [x] The player is not aware of how much the crystals are worth until the crystal is clicked (they won't be shown anything other than their score, they would have to do mental math to know the crystal values)
// - [x] Player wins when the random number and the players score are equal. 
// - [x] The player loses if their score is higher than the random number
// - [x] Game restarts when the player wins or loses
// - [x] At the start of a new game a new random number will be shown
// - [x] Crystals will have new values that are hidden to the player
// - [x] player's score and score counter will reset to 0
// - [x] Number of games played should be shown, wins and loses
// - [x] Game reset is not dependant on the page being reloaded
// - [x] Random number should be between 19 and 120
// - [x] Crystals will have a random hidden value between 1-12

// Exta stuff
// - [x] Sound for when clicking gem, clink
// - [x] Sound at loss
// - [x] Sound at win
// - [x] Reset button