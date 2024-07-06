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
    { cardID: 1, card: '2h', value: 2, img: null },
    { cardID: 2, card: '3h', value: 3, img: null },
    { cardID: 3, card: '4h', value: 4, img: null },
    { cardID: 4, card: '5h', value: 5, img: null },
    { cardID: 5, card: '6h', value: 6, img: null },
    { cardID: 6, card: '7h', value: 7, img: null },
    { cardID: 7, card: '8h', value: 8, img: null },
    { cardID: 8, card: '9h', value: 9, img: null },
    { cardID: 9, card: '10h', value: 10, img: null },
    { cardID: 10, card: 'jh', value: 10, img: null },
    { cardID: 11, card: 'qh', value: 10, img: null },
    { cardID: 12, card: 'kh', value: 10, img: null },
    { cardID: 13, card: 'ah', value: ahChoice, img: null },
    //Spades
    { cardID: 14, card: '2s', value: 2, img: null },
    { cardID: 15, card: '3s', value: 3, img: null },
    { cardID: 16, card: '4s', value: 4, img: null },
    { cardID: 17, card: '5s', value: 5, img: null },
    { cardID: 18, card: '6s', value: 6, img: null },
    { cardID: 19, card: '7s', value: 7, img: null },
    { cardID: 20, card: '8s', value: 8, img: null },
    { cardID: 21, card: '9s', value: 9, img: null },
    { cardID: 22, card: '10s', value: 10, img: null },
    { cardID: 23, card: 'js', value: 10, img: null },
    { cardID: 24, card: 'qs', value: 10, img: null },
    { cardID: 25, card: 'ks', value: 10, img: null },
    { cardID: 26, card: 'as', value: asChoice, img: null },
    //Clubs
    { cardID: 27, card: '2c', value: 2, img: null },
    { cardID: 28, card: '3c', value: 3, img: null },
    { cardID: 29, card: '4c', value: 4, img: null },
    { cardID: 30, card: '5c', value: 5, img: null },
    { cardID: 31, card: '6c', value: 6, img: null },
    { cardID: 32, card: '7c', value: 7, img: null },
    { cardID: 33, card: '8c', value: 8, img: null },
    { cardID: 34, card: '9c', value: 9, img: null },
    { cardID: 35, card: '10c', value: 10, img: null },
    { cardID: 36, card: 'jc', value: 10, img: null },
    { cardID: 37, card: 'qc', value: 10, img: null },
    { cardID: 38, card: 'kc', value: 10, img: null },
    { cardID: 39, card: 'ac', value: acChoice, img: null },
    //Diamonds
    { cardID: 40, card: '2d', value: 2, img: null },
    { cardID: 41, card: '3d', value: 3, img: null },
    { cardID: 42, card: '4d', value: 4, img: null },
    { cardID: 43, card: '5d', value: 5, img: null },
    { cardID: 44, card: '6d', value: 6, img: null },
    { cardID: 45, card: '7d', value: 7, img: null },
    { cardID: 46, card: '8d', value: 8, img: null },
    { cardID: 47, card: '9d', value: 9, img: null },
    { cardID: 48, card: '10d', value: 10, img: null },
    { cardID: 49, card: 'jd', value: 10, img: null },
    { cardID: 50, card: 'qd', value: 10, img: null },
    { cardID: 51, card: 'kd', value: 10, img: null },
    { cardID: 52, card: 'ad', value: acChoice, img: null },
    //Jokers
    { cardID: 53, card: 'jk1', value: jk1Choice, img: null },
    { cardID: 54, card: 'jk2', value: jk2Choice, img: null }
];


function initGame() {
    activeDeck = [...deck];
    dealerPull1 = Math.round(Math.random() * (53 + 1));
    // Set Hands and Bet - - - - - - 
    for (i = 0; i < 4; i++) {
        //Dealer First Card
        card1 = Math.round(Math.random() * (activeDeck.length + 1));
        card1Obj = activeDeck[card1];
        activeDeck = activeDeck.filter(function (activeDeck) {
            return activeDeck.cardID != card1;
        });
        //Player First Card
        card2 = Math.round(Math.random() * (activeDeck.length + 1));
        card2Obj = activeDeck[card2];
        activeDeck = activeDeck.filter(function (activeDeck) {
            return activeDeck.cardID != card2;
        });
        //card3 =
        //card4 =
        //Dealer's First Card
        //dealerHand.push(Array.find(deck[dealerPull1] => deck[dealerPull1].cardID === dealerPull1 + 1));

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