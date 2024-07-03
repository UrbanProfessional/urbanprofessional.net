// Dynamic Game Values
dealerHand = null;
playerHand = null;
activeDeck = null;
ahChoice = 1;
asChoice = 1;
acChoice = 1;
adChoice = 1;
jk1Choice = null;
jk2Choice = null;

// Constant Game Vars
const startingBet = 5;
const startingBank = 1000;
const deck = [
    //Hearts
    { id: 1, card: '2h', value: 2, img: null },
    { id: 2, card: '3h', value: 3, img: null },
    { id: 3, card: '4h', value: 4, img: null },
    { id: 4, card: '5h', value: 5, img: null },
    { id: 5, card: '6h', value: 6, img: null },
    { id: 6, card: '7h', value: 7, img: null },
    { id: 7, card: '8h', value: 8, img: null },
    { id: 8, card: '9h', value: 9, img: null },
    { id: 9, card: '10h', value: 10, img: null },
    { id: 10, card: 'jh', value: 10, img: null },
    { id: 11, card: 'qh', value: 10, img: null },
    { id: 12, card: 'kh', value: 10, img: null },
    { id: 13, card: 'ah', value: ahChoice, img: null },
    //Spades
    { id: 14, card: '2s', value: 2, img: null },
    { id: 15, card: '3s', value: 3, img: null },
    { id: 16, card: '4s', value: 4, img: null },
    { id: 17, card: '5s', value: 5, img: null },
    { id: 18, card: '6s', value: 6, img: null },
    { id: 19, card: '7s', value: 7, img: null },
    { id: 20, card: '8s', value: 8, img: null },
    { id: 21, card: '9s', value: 9, img: null },
    { id: 22, card: '10s', value: 10, img: null },
    { id: 23, card: 'js', value: 10, img: null },
    { id: 24, card: 'qs', value: 10, img: null },
    { id: 25, card: 'ks', value: 10, img: null },
    { id: 26, card: 'as', value: asChoice, img: null },
    //Clubs
    { id: 27, card: '2c', value: 2, img: null },
    { id: 28, card: '3c', value: 3, img: null },
    { id: 29, card: '4c', value: 4, img: null },
    { id: 30, card: '5c', value: 5, img: null },
    { id: 31, card: '6c', value: 6, img: null },
    { id: 32, card: '7c', value: 7, img: null },
    { id: 33, card: '8c', value: 8, img: null },
    { id: 34, card: '9c', value: 9, img: null },
    { id: 35, card: '10c', value: 10, img: null },
    { id: 36, card: 'jc', value: 10, img: null },
    { id: 37, card: 'qc', value: 10, img: null },
    { id: 38, card: 'kc', value: 10, img: null },
    { id: 39, card: 'ac', value: acChoice, img: null },
    //Diamonds
    { id: 40, card: '2d', value: 2, img: null },
    { id: 41, card: '3d', value: 3, img: null },
    { id: 42, card: '4d', value: 4, img: null },
    { id: 43, card: '5d', value: 5, img: null },
    { id: 44, card: '6d', value: 6, img: null },
    { id: 45, card: '7d', value: 7, img: null },
    { id: 46, card: '8d', value: 8, img: null },
    { id: 47, card: '9d', value: 9, img: null },
    { id: 48, card: '10d', value: 10, img: null },
    { id: 49, card: 'jd', value: 10, img: null },
    { id: 50, card: 'qd', value: 10, img: null },
    { id: 51, card: 'kd', value: 10, img: null },
    { id: 52, card: 'ad', value: acChoice, img: null },
    //Jokers
    { id: 53, card: 'jk1', value: jk1Choice, img: null },
    { id: 54, card: 'jk2', value: jk2Choice, img: null }
];


function initGame() {
    activeDeck = [...deck];
    dealerPull1 = Math.round(Math.random() * (53 + 1));
    // Set Hands and Bet - - - - - - 
    for (i = 0; i < 4; i++) {
        //Dealer's First Card
        //dealerHand.push(Array.find(deck[dealerPull1] => deck[dealerPull1].id === dealerPull1 + 1));

    }
    dealerHand;
    playerHand;
    activeDeck;
    ahChoice = 1;
    asChoice = 1;
    acChoice = 1;
    adChoice = 1;
    jk1Choice = null;
    jk2Choice = null;

}