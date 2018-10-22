function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let expr = document.getElementById("lt-expression");
let insrt = document.getElementById('lt-insertNumber');
let inputResult;
let answerPlus;
let answerMinus;
let first = getRandomArbitrary(1, 9);
let second = getRandomArbitrary(1, 12);
let correctAnswers = [];

//create an expression function

function createResultExpression() {
    let operatorCode = getRandomArbitrary(0, 2); // 0 - plus, 1 - minus

    let first, second, operator, correctAnswer;
    // random + - operator
    if (operatorCode == 1) {
        operator = ' - ';
        first = getRandomArbitrary(8, 15);
        second = getRandomArbitrary(1, 7);
        correctAnswer = first - second;
    } else {
        operator = ' + ';
        first = getRandomArbitrary(3, 9);
        second = getRandomArbitrary(2, 7);
        correctAnswer = first + second;
    }
    correctAnswers.push(correctAnswer);
    return '<div class="mb-3 d-flex justify-content-center">' + first + operator + second + ' = <input type="number" class="result col-2 inpResult"/><p class="getAnswer"></p></span>';
}

for (let i = 0; i <= 10; i++) {
    expr.innerHTML += createResultExpression();
}

function checkAnswer() {
    let getUserInputValue = document.getElementsByTagName("input");
    let userAnswers = document.getElementsByClassName('getAnswer');
    for (let i = 0; i < getUserInputValue.length; i++) {
        let img;
        let userInput = parseInt(getUserInputValue[i].value);
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
    let first = getRandomArbitrary(1, 9);
    let correctAnswer = getRandomArbitrary(1, 6);
    let result = first + correctAnswer;
    correctAnswers.push(correctAnswer);
    return '<div class="mb-3 d-flex justify-content-center">' + first + ' + ' +
        '<input class="emptyNumber col-2"/> = ' + result + '<span class="getAnswer"></span></div>';
}

for (let i = 0; i <= 5; i++) {
    insrt.innerHTML += createOperandExpression();
}

// random letters

function alph() {
    let alphArray = [
        "За нашим домом есть сад.В саду растут яблони, груши, сливы и вишни.Есть кусты малины.На грядках растёт клубника.Перед домом клумбы с цветами.На клумбах цветут розы, лилии, пионы, анютины глазки.",
        "На ёлке детям подарили много игрушек. Кирюша получил юлу. Лиза получила большую куклу. Ваня был очень рад барабану. Малыши Вова и Миша получили кубики. Они тут же стали строить из них дом. Ребята дружно играли новыми игрушками.",
        "Мама звала Аню, Симу и Яшу кушать. На столе был завтрак: масло, сыр, мёд, хлеб и чай. Были яблоки и груши. Мама принесла ещё арбуз. Аня ела хлеб и масло. Сима ела хлеб с сыром. Яша ел хлеб с мёдом. А потом дети стали есть фрукты",
    "Люба и Дуня пасли утят на реке. Утята были маленькие. Вдруг спустился к реке коршун. Он схватил одного утёнка. Девочки закричали. На крик прибежал Ваня. Ваня стал бросать в коршуна камни. Коршун выпустил утёнка и улетел."];
    let k = Math.floor(Math.random() * alphArray.length);
        return '<div class="m-2"><b>' + alphArray[k] + '</b></div>' + "  ";
}
for (let i = 0; i < 1; i++) {
    document.getElementById('lt-letters').innerHTML += alph();
}

// syllables
function vowels() {
    let syllables = [
    ];

    let s = Math.floor(Math.random() * syllables.length);
    let r = Math.floor(Math.random() * syllables.length);
    syllables[r] = syllables[r].split("").reverse().join("");


    return '<div class="letter--in-circle letter--in-circle-blue m-2"><b>' + syllables[s] + '</b></div>' + "  " +
        "<br/></br>" + '<div class="letter--in-circle letter--in-circle-blue m-2"><b>' + syllables[r] + '</b></div>' + "  ";
}


for (let i = 0; i <= 3; i++) {
    document.getElementById('lt-syllables').innerHTML += vowels();
}

// 100 words 

function words() {
    let words = [
    ""
    ];
    let k = Math.floor(Math.random() * words.length);
    return '<div class="letter--in-circle letter--in-circle-blue m-2"><b>' + words[k] + '</b></div>' + "  ";
}

for (let i = 0; i <= 10; i++) {
    document.getElementById('lt-englishWords').innerHTML += words();
}