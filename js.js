function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var expr = document.getElementById("expression");
var insrt = document.getElementById('insertNumber');
var inputResult;
var answerPlus;
var answerMinus;
var first = getRandomArbitrary(1, 9);
var second = getRandomArbitrary(1, 12);
var correctAnswers = [];

//random function

//create an expression function

function createResultExpression() {
    var operatorCode = getRandomArbitrary(0, 2); // 0 - plus, 1 - minus 

    var first, second, operator, correctAnswer;
    // random + - operator
    if (operatorCode == 1) {
        operator = ' - ';
        first = getRandomArbitrary(81, 989);
        second = getRandomArbitrary(1, 5);
        correctAnswer = first - second;
    } else {
        operator = ' + ';
        first = getRandomArbitrary(1, 792);
        second = getRandomArbitrary(1, 523);
        correctAnswer = first + second;
    }
    correctAnswers.push(correctAnswer);
    return '<div class="mb-3 d-flex justify-content-center">' + first + operator + second + ' = <input type="number" class="result col-2 inpResult"/><p class="getAnswer"></p></span>';
}

for (var i = 0; i <= 10; i++) {
    expr.innerHTML += createResultExpression();
}
console.log(correctAnswers);

function checkAnswer() {
    var getUserInputValue = document.getElementsByTagName("input");
    var userAnswers = document.getElementsByClassName('getAnswer');
    for (var i = 0; i < getUserInputValue.length; i++) {
        var img;
        var userInput = parseInt(getUserInputValue[i].value);
        if (correctAnswers[i] == userInput) {
            img = './star.png';
        } else {
            img = './sadstar.png';
        };
        userAnswers[i].innerHTML = '<img class="getAnswer-img" src="' + img + '" width="40px;"/>'
    }
}


// insert a number
function createOperandExpression() {
    var first = getRandomArbitrary(1, 89);
    var correctAnswer = getRandomArbitrary(0, 43);
    var result = first + correctAnswer;
    correctAnswers.push(correctAnswer);
    return '<div class="mb-3 d-flex justify-content-center">' + first + ' + ' +
        '<input class="emptyNumber col-2"/> = ' + result + '<span class="getAnswer"></span></div>';
}

for (var i = 0; i <= 5; i++) {
    insrt.innerHTML += createOperandExpression();
}

// random letters

function alph() {
    var alphArray = ['А', 'Б', 'В', ' Г', ' Д', ' Е', ' Ё', ' Ж', ' З', ' И', ' Й', ' К', ' Л', ' М', ' Н', ' О', ' П', ' Р', ' С', ' Т', ' У', ' Ф', ' Х', ' Ц', ' Ч', ' Ш', ' Щ', ' Ъ', ' Ы', ' Ь', ' Э', ' Ю', ' Я'];
    var k = Math.floor(Math.random() * alphArray.length);
    return '<div class="letter--in-circle m-2"><b>' + alphArray[k] + '</b></div>' + "  ";
}
for (var i = 0; i <= 6; i++) {
    document.getElementById('letters').innerHTML += alph();
}

// syllables
function vowels() {
    var syllables = ['аб',
        'ав',
        'аг',
        'ад',
        'аж',
        'аз',
        'ай',
        'ак',
        'ал',
        'ам',
        'ан',
        'ап',
        'ар',
        'ас',
        'ат',
        'ац',
        'ач',
        'аш',
        'ев',
        'ед',
        'еж',
        'ез',
        'ек',
        'ел',
        'ем',
        'ен',
        'еп',
        'ер',
        'ес',
        'ет',
        'ец',
        'еч',
        'ёл',
        'зи',
        'иб',
        'ив',
        'иг',
        'из',
        'ик',
        'ил',
        'им',
        'ин',
        'ир',
        'ис',
        'ит',
        'иц',
        'ич',
        'ищ',
        'об',
        'ов',
        'ог',
        'од',
        'оз',
        'ой',
        'ок',
        'ол',
        'ом',
        'он',
        'оп',
        'ор',
        'ос',
        'от',
        'ох',
        'оч',
        'уб',
        'ув',
        'уг',
        'уд',
        'уж',
        'уз',
        'ук',
        'ул',
        'ум',
        'ун',
        'уп',
        'ур',
        'ус',
        'ут',
        'ух',
        'уч',
        'уш',
        'ыв',
        'ыр',
        'юд',
        'юл',
        'юр',
        'ют',
        'яв',
        'яз',
        'ял',
        'ян',
        'яр',
        'яс',
        'ят',
        'яц',
        'ящ'
    ];
    var s = Math.floor(Math.random() * syllables.length);
    return '<div class="letter--in-circle letter--in-circle-blue m-2"><b>' + syllables[s] + '</b></div>' + "  ";
}

for (var i = 0; i <= 6; i++) {
    document.getElementById('syllables').innerHTML += vowels();
}

// 100 words 

function words() {
    var words = [
        // Gold Words
        'a', 'I', 'it', 'the',
        'and', 'in', 'of', 'to',
        'be', 'is', 'that', 'was',

        // Red Words
        'all', 'but', 'he', 'on', 'they',
        'are', 'for', 'her', 'one', 'we',
        'as', 'had', 'his', 'said', 'with',
        'at', 'have', 'not', 'so', 'you',

        // Blue Words
        'an', 'do', 'if', 'my', 'or',
        'by', 'go', 'me', 'no', 'up',

        // Green Words
        'big', 'has', 'off', 'see',
        'can', 'him', 'old', 'she',
        'did', 'new', 'our', 'two',
        'get', 'now', 'out', 'who',

        // Orange Words
        'back', 'from', 'made', 'this',
        'been', 'into', 'much', 'well',
        'came', 'just', 'over', 'went',
        'down', 'like', 'them', 'when',

        // Indigo Words
        'call', 'make', 'some', 'what',
        'come', 'must', 'then', 'will',
        'here', 'only', 'were', 'your',

        // Violet Words
        'about', 'could', 'little', 'more',
        'right', 'where', 'before', 'first',
        'look', 'other', 'their', 'want',
        'which', 'there'
    ];
    var k = Math.floor(Math.random() * words.length);
    return '<div class="letter--in-circle letter--in-circle-blue m-2"><b>' + words[k] + '</b></div>' + "  ";
}

for (var i = 0; i <= 10; i++) {
    document.getElementById('englishWords').innerHTML += words();
}