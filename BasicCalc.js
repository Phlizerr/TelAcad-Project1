let dig1 = document.querySelector("#dig1");
let dig2 = document.querySelector("#dig2");
let dig3 = document.querySelector("#dig3");
let dig4 = document.querySelector("#dig4");
let dig5 = document.querySelector("#dig5");
let dig6 = document.querySelector("#dig6");
let dig7 = document.querySelector("#dig7");
let dig8 = document.querySelector("#dig8");
let dig9 = document.querySelector("#dig9");
let dig0 = document.querySelector("#dig0");
let digEq = document.querySelector("#digEq");
let digDel = document.querySelector("#digDel");
let digC = document.querySelector("#digC");
let digPlus = document.querySelector("#digPlus");
let digMinus = document.querySelector("#digMinus");
let digMultiply = document.querySelector("#digMultiply");
let result = document.querySelector("#result");

let number1 = 0;
let number2 = 0;
let temporary = 0;
let noOfOpperations = 0;
let sum = 0;
let mult = 1;
let sub = 0;
let opperationPressed = false;

function createNumber(number, digit){
    number = number * 10 + digit;
    result.innerHTML = number;
    return number;
}

function clearNumber(){
    number1 = 0;
    number2 = 0;
    opperationPressed = false;
    result.innerHTML = " ";
}

function deleteNumber(){
    let aux = result.innerHTML;
    aux = parseInt(aux/10);
    result.innerHTML = aux;
    if(opperationPressed == false)
        number1 = aux;
    else
        number2 = aux;
}

function addNumbers(){
    sum = Number(number1) + Number(number2);
    return sum;
}

function subtractNumbers(){
    sub = Number(number1) - Number(number2);
    return sub;
}

function multiplyNumbers(){
    mult = Number(number1) * Number(number2);
    return mult;
}

digEq.addEventListener("click", function(){
    if (opperationPressed == "+")
        result.innerHTML = addNumbers();
    else if (opperationPressed == "-")
        result.innerHTML = subtractNumbers();
    else if (opperationPressed == "*")
        result.innerHTML = multiplyNumbers();
});

digPlus.addEventListener("click", function(){
    result.innerHTML = " ";
    opperationPressed = "+";
});

digMinus.addEventListener("click", function(){
    result.innerHTML = " ";
    opperationPressed = "-";
});

digMultiply.addEventListener("click", function(){
    result.innerHTML = " ";
    opperationPressed = "*";
});

digDel.addEventListener("click", deleteNumber);
digC.addEventListener("click", clearNumber);

dig1.addEventListener("click", function(){
    if(opperationPressed == false)
        number1 = createNumber(number1, 1);
    else
        number2 = createNumber(number2, 1);
});

dig2.addEventListener("click", function(){
    if(opperationPressed == false)
        number1 = createNumber(number1, 2);
    else
        number2 = createNumber(number2, 2);
});

dig3.addEventListener("click", function(){
    if(opperationPressed == false)
        number1 = createNumber(number1, 3);
    else
        number2 = createNumber(number2, 3);
});

dig4.addEventListener("click", function(){
    if(opperationPressed == false)
        number1 = createNumber(number1, 4);
    else
        number2 = createNumber(number2, 4);
});

dig5.addEventListener("click", function(){
    if(opperationPressed == false)
        number1 = createNumber(number1, 5);
    else
        number2 = createNumber(number2, 5);
});

dig6.addEventListener("click", function(){
    if(opperationPressed == false)
        number1 = createNumber(number1, 6);
    else
        number2 = createNumber(number2, 6);
});

dig7.addEventListener("click", function(){
    if(opperationPressed == false)
        number1 = createNumber(number1, 7);
    else
        number2 = createNumber(number2, 7);
});

dig8.addEventListener("click", function(){
    if(opperationPressed == false)
        number1 = createNumber(number1, 8);
    else
        number2 = createNumber(number2, 8);
});

dig9.addEventListener("click", function(){
    if(opperationPressed == false)
        number1 = createNumber(number1, 9);
    else
        number2 = createNumber(number2, 9);
});

dig0.addEventListener("click", function(){
    if(opperationPressed == false)
        number1 = createNumber(number1, 0);
    else
        number2 = createNumber(number2, 0);
});