//Challenge 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt('What year were you born in?');
    var daysAge = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnwser = document.createTextNode('You are ' + daysAge + ' in days');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnwser);
    document.getElementById('flex-box-result').appendChild(h1);
    document.getElementById('flex-box-result').style.display = "flex";
}

function reset() {
    document.getElementById('ageInDays').remove();
    document.getElementById('flex-box-result').style.display = "none";
}

//Challenge 2
let raptorImages = ["https://media0.giphy.com/media/mG8Q2xNLpgpsPIDljm/source.gif", "https://i.imgur.com/P63bZIm.gif", "https://media2.giphy.com/media/dJtoGmnupA00QaJitW/giphy.gif", "https://media.giphy.com/media/XeYZIASCvJodSg2rrc/giphy.gif", "https://media.giphy.com/media/gioVUyMTs4fYCVpuZn/giphy.gif", "https://media1.tenor.com/images/e8298deb962b49dec0a0102880b1b491/tenor.gif?itemid=15258927", "https://media3.giphy.com/media/S6wqTHSh2ASxTBiL4O/giphy.gif"];
function generateRaptor() {
    var image = document.createElement("img");
    var div = document.getElementById("flex-raptor-gen");
    image.src = raptorImages[Math.floor(Math.random() * raptorImages.length)];
    image.height = "200";
    image.width = "300";
    div.appendChild(image);
}

//Challenge 3
function rpsGame(yourChoice) {
    var humanChoice, botChoice, results, message;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomChoice());
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomChoice() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You Lost', 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'message': 'You Tied', 'color': 'yellow' };
    }
    else {
        return { 'message': 'You Won', 'color': 'green' };
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //show two selected images
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src ='   " + imagesDatabase[humanImageChoice] + "' height=150 width=150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233,1);'>";
    messageDiv.innerHTML = "<h1 style= 'color: " + finalMessage['color'] + "; font-size: 60px; padding:30 px;'>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src ='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24,1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//challenge 4: change all the colors
var all_buttons = document.getElementsByTagName('button');
var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThis) {
    if (buttonThis.value === 'red') {
        buttonsRed();
    }
    else if (buttonThis.value === 'green') {
        buttonsGreen();
    }
    else if (buttonThis.value === 'reset') {
        buttonColorReset();
    }
    else if (buttonThis.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    var colors = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(colors[Math.floor(Math.random() * 4)]);
    }
}

//challenge 5: blackjack
let blackjackGame = {
    'you': {
        'scoreSpan': '#your-blackjack-result',
        'div': '#your-box',
        'score': 0
    },
    'dealer': {
        'scoreSpan': '#dealer-blackjack-result',
        'div': '#dealer-box',
        'score': 0
    },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11] },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
    'showResult': false
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('static/Sounds/swish.m4a')
const winSound = new Audio('static/Sounds/cash.mp3');
const lossSound = new Audio('static/Sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(YOU, card);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function showCard(activePlayer, card) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/Images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal() {
    if (blackjackGame['turnsOver'] === true) {
        blackjackGame['isStand'] = false
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = 'black';
        document.querySelector(YOU['scoreSpan']).textContent = 0;
        document.querySelector(DEALER['scoreSpan']).textContent = 0;
        document.querySelector(YOU['scoreSpan']).style.color = 'white';
        document.querySelector(DEALER['scoreSpan']).style.color = 'white';
        YOU['score'] = 0;
        DEALER['score'] = 0;
        blackjackGame['turnsOver'] = false;
        blackjackGame['showResult'] = false;
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        //if adding 11 keeps me below 21, add 11. Otherwise, add 1
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }
        else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    }
    else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
        let card = randomCard();
        showCard(DEALER, card);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(500);
    }

    blackjackGame['turnsOver'] = true;
    showResult(computeWinner());

}

//compute winner and return who just won 
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) { //higher score than dealer or dealer busts and you don't
            blackjackGame['wins']++;
            winner = YOU;
        }
        else if (YOU['score'] < DEALER['score']) {//if dealer has higher score than you
            blackjackGame['losses']++;
            winner = DEALER;
        }
        else if (YOU['score'] === DEALER['score']) { //if same score
            blackjackGame['draws']++;
        }
    }
    else if (YOU['score'] > 21 && DEALER['score'] <= 21) {//if user busts but dealer does not
        blackjackGame['losses']++;
        winner = DEALER;
    }
    else if (YOU['score'] > 21 && DEALER['score'] > 21) {//when you and the daeler busts
        blackjackGame['draws']++;
    }

    console.log('Winner is ', winner);
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnsOver'] === true && blackjackGame['showResult'] === false) {
        if (winner === YOU) {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        }
        else if (winner === DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();
        }
        else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew!'
            messageColor = 'black'
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
        blackjackGame['showResult'] = true;
    }
}