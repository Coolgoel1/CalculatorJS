let currentDisplay = document.getElementById("current");

let num1 = "";
let num2 = "";
let oper = "";

function addnum(num) {
    if (currentDisplay.innerText === "0" && num !== ".") {
        currentDisplay.innerText = num;
    } else {
        currentDisplay.innerText += num;
    }
}

function clearCalc() {
    currentDisplay.innerText = "0";
    num1 = "";
    num2 = "";
    oper = "";
}

function operator(op) {
    num1 = currentDisplay.innerText;
    oper = op;
    currentDisplay.innerText = "";
}

function calc() {
    if (oper === "" || num1 === ""){
        return;
    }
    num2 = currentDisplay.innerText;
    let a = Number(num1);
    let b = Number(num2);
    let result;

    if (oper === "+") {
        result = a + b;
    } else if (oper === "-") {
        result = a - b;
    } else if (oper === "*") {
        result = a * b;
    } else if (oper === "/") {
        if (b === 0) {
            currentDisplay.innerText = "Error";
            return;
        }
        result = a / b;
    } else if (oper === "%") {
        result = (a * b) / 100;
    }
    
    currentDisplay.innerText = result;
    num1 = "";
    oper = "";
}

function decimal() {
    if (!currentDisplay.innerText.includes(".")) {
        currentDisplay.innerText += ".";
    }
}


document.getElementById("clear").onclick = clearCalc;

document.getElementById("percent").onclick = function() {
    operator("%");
};
document.getElementById("divide").onclick = function() {
    operator("/");
};
document.getElementById("seven").onclick = function() { 
    addnum("7"); 
};
document.getElementById("eight").onclick = function() { 
    addnum("8"); 
};
document.getElementById("nine").onclick = function() { 
    addnum("9"); 
};
document.getElementById("mul").onclick = function() { 
    operator("*"); 
};
document.getElementById("four").onclick = function() { 
    addnum("4"); 
};
document.getElementById("five").onclick = function() { 
    addnum("5"); 
};
document.getElementById("six").onclick = function() { 
    addnum("6"); 
};
document.getElementById("minus").onclick = function() { 
    operator("-"); 
};
document.getElementById("one").onclick = function() { 
    addnum("1"); 
};
document.getElementById("two").onclick = function() { 
    addnum("2"); 
};
document.getElementById("three").onclick = function() { 
    addnum("3"); 
};
document.getElementById("plus").onclick = function() { 
    operator("+"); 
};
document.getElementById("dec").onclick = decimal;
document.getElementById("zero").onclick = function() { 
    addnum("0"); 
};
document.getElementById("equal").onclick = calc;