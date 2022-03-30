// quest 0


function quest0() {
    num=prompt ('초 단위 시간을 입력하세요.')
    min=Math.floor(num/60)
    sec=num%60
    console.log(min + ' 분 ' + sec +' 초입니다.')
};


// quest 1


function getDist() {
    num1 = prompt('첫 번째 점의 x좌표를 입력하세요.')
    num2 = prompt('첫 번째 점의 y좌표를 입력하세요.')
    num3 = prompt('두 번째 점의 x좌표를 입력하세요.')
    num4 = prompt('두 번째 점의 y좌표를 입력하세요.')
    distance = Math.sqrt((num1 - num3)**2 +(num3 - num4)**2)
    console.log('두 점 사이의 거리는 ' + distance + ' 입니다.')
}


// quest 2


function quest2(text) {
    let result = text.toUpperCase('text');
    console.log(result)
}


// quest 3


function cal() {
    num1 = parseInt(prompt('첫 번째 숫자를 입력하세요'))
    operator = (prompt('연산자를 입력하세요'))
    num2= parseInt(prompt('두 번째 숫자를 입력하세요'))
    switch (operator) {
        case '+':
            answer = num1 + num2
            console.log('정답은 ' + answer + '입니다.')
            break;
        case '-':
            answer = num1 - num2
            console.log('정답은 ' + answer + '입니다.')
            break;
        case '/':
            answer = num1 / num2
            console.log('정답은 ' + answer + '입니다.')
            break;
        case '*':
            answer = num1 * num2
            console.log('정답은 ' + answer + '입니다.')
            break;
        case '%':
            answer = num1 % num2
            console.log('정답은 ' + answer + ' 입니다.')
            break;
    
        default:
            break;
    }

}



// quest 4


let userPlay = '가위';
do {
   userPlay = prompt("가위 바위 보!");
}
while (userPlay !== "주먹" && userPlay !== "보" && userPlay !== "가위"); 

let computerSelection = computerPlay();

function computerPlay() { 
   let random = ["주먹", "보", "가위"];
   return random[Math.floor(Math.random() * 3)];

}
function playRound(playerSelection, computerSelection) { 
   if (playerSelection === "주먹") {
       if (computerSelection === "주먹") {
           return "비김!";
       } else if (computerSelection === "보") {
           return "짐!";
       } else {
           return "이김!";
       }
   } else if (playerSelection === "보") {
       if (computerSelection === "주먹") {
           return "이김!";
       } else if (computerSelection === "보") {
           return "비김!";
       } else {
           return "짐!";
       }
   } else {
       if (computerSelection === "주먹") {
           return "짐!";
       } else if (computerSelection === "보!") {
           return "이김";
       } else {
           return "비김!";
       }
   }
}

console.log(playRound(userPlay, computerSelection));

// phase 5

function myReverse(str) {
    let newString ='';
    for (let i = str.length-1; i>=0; i--) {
        newString += str[i];
    }
    return newString;
}

const string = prompt ('문자열을 입력하세요')

const result = myReverse(string);
console.log(result);




// quest 6


var number = 0
function noNegative() {
    while ( number >=0 ) {
        number = parseInt(prompt ('숫자를 입력하세요'))  
            if (number%2==1) {
                console.log(number + '를 입력하셨네요')
            if (number%2==0) {
                console.log('끝!')
            }
        }

}}



// quest 7

function acr(){
    s=prompt('문자열을 입력하세요')
    var words, acronym, nextWord;

    words = s.split(' ');
    acronym= "";
    index = 0
    while (index<words.length) {
            nextWord = words[index];
            acronym = acronym + nextWord.charAt(0);
            index = index + 1 ;
    }
    return (acronym.toUpperCase())
}


// quest 8

// quest 9


var str = 'Computer engineering has been rapidly changed than any other academic disciplines; these changes are immediately reflected in the industrial field'


var counts = {};


var ch, index, len, count;


for (index = 0, len = str.length; index < len; ++index) {
    
    ch = str.charAt(index); 

    
    count = counts[ch];

    counts[ch] = count ? count + 1 : 1;
}

for (ch in counts) {
    console.log(ch + " : " + counts[ch]);
}

