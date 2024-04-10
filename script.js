"use strict";

const screenContent = document.querySelector(".screenContent");

let addition = function (a, b) {
    displayValue = Number(a) + Number(b);
    toScreen();
};

let substraction = function (a, b) {
    displayValue = Number(a) - Number(b);
    toScreen();
};

let multiplication = function (a, b) {
    displayValue = Number(a) * Number(b);
    toScreen();
};

let division = function (a, b) {
    displayValue = Number(a) / Number(b);
    toScreen();
};

let firstNum;
let operator;
let secondNum;

const operate = function () {
    if (operator === "+") {
        addition(firstNum, secondNum);
    } else if (operator === "-") {
        return substraction(firstNum, secondNum);
    } else if (operator === "*") {
        return multiplication(firstNum, secondNum);
    } else if (operator === "/") {
        return division(firstNum, secondNum);
    }
};

//Button functions
//Numbers

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const clear = document.querySelector("#clear");
const erase = document.querySelector("#erase");
const point = document.querySelector("#point");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");

let displayValue = "";

const toScreen = () => (screenContent.innerText = displayValue);

const toMemory = function () {
    if (displayValue !== "") {
        firstNum = displayValue;
    } else if (firstNum != undefined) {
        secondNum = displayValue;
        operate();
    }
};

zero.addEventListener("click", () => {
    if (
        displayValue === "" ||
        displayValue === "+" ||
        displayValue === "-" ||
        displayValue === "*" ||
        displayValue === "/"
    ) {
        displayValue = "0";
        toScreen();
    } else if (displayValue !== "0") {
        displayValue += "0";
        toScreen();
    }
});

one.addEventListener("click", () => {
    if (
        displayValue === "0" ||
        displayValue === "+" ||
        displayValue === "-" ||
        displayValue === "*" ||
        displayValue === "/"
    ) {
        displayValue = "1";
        toScreen();
    } else {
        displayValue += "1";
        toScreen();
    }
});

two.addEventListener("click", () => {
    if (
        displayValue === "0" ||
        displayValue === "+" ||
        displayValue === "-" ||
        displayValue === "*" ||
        displayValue === "/"
    ) {
        displayValue = "2";
        toScreen();
    } else {
        displayValue += "2";
        toScreen();
    }
});

three.addEventListener("click", () => {
    if (
        displayValue === "0" ||
        displayValue === "+" ||
        displayValue === "-" ||
        displayValue === "*" ||
        displayValue === "/"
    ) {
        displayValue = "3";
        toScreen();
    } else {
        displayValue += "3";
        toScreen();
    }
});

four.addEventListener("click", () => {
    if (
        displayValue === "0" ||
        displayValue === "+" ||
        displayValue === "-" ||
        displayValue === "*" ||
        displayValue === "/"
    ) {
        displayValue = "4";
        toScreen();
    } else {
        displayValue += "4";
        toScreen();
    }
});

five.addEventListener("click", () => {
    if (
        displayValue === "0" ||
        displayValue === "+" ||
        displayValue === "-" ||
        displayValue === "*" ||
        displayValue === "/"
    ) {
        displayValue = "5";
        toScreen();
    } else {
        displayValue += "5";
        toScreen();
    }
});

six.addEventListener("click", () => {
    if (
        displayValue === "0" ||
        displayValue === "+" ||
        displayValue === "-" ||
        displayValue === "*" ||
        displayValue === "/"
    ) {
        displayValue = "6";
        toScreen();
    } else {
        displayValue += "6";
        toScreen();
    }
});

seven.addEventListener("click", () => {
    if (
        displayValue === "0" ||
        displayValue === "+" ||
        displayValue === "-" ||
        displayValue === "*" ||
        displayValue === "/"
    ) {
        displayValue = "7";
        toScreen();
    } else {
        displayValue += "7";
        toScreen();
    }
});

eight.addEventListener("click", () => {
    if (
        displayValue === "0" ||
        displayValue === "+" ||
        displayValue === "-" ||
        displayValue === "*" ||
        displayValue === "/"
    ) {
        displayValue = "8";
        toScreen();
    } else {
        displayValue += "8";
        toScreen();
    }
});

nine.addEventListener("click", () => {
    if (
        displayValue === "0" ||
        displayValue === "+" ||
        displayValue === "-" ||
        displayValue === "*" ||
        displayValue === "/"
    ) {
        displayValue = "9";
        toScreen();
    } else {
        displayValue += "9";
        toScreen();
    }
});

clear.addEventListener("click", () => {
    displayValue = "0";
    toScreen();
});

erase.addEventListener("click", () => {
    displayValue = displayValue.substring(0, displayValue.length - 1);
    if (displayValue === "") {
        displayValue = "0";
    }
    toScreen();
});

point.addEventListener("click", () => {
    displayValue += ".";
    toScreen();
});

plus.addEventListener("click", () => {
    toMemory();
    operator = "+";
    displayValue = "+";
    toScreen();
});

minus.addEventListener("click", () => {
    toMemory();
    operator = "-";
    displayValue = "-";
    toScreen();
});

times.addEventListener("click", () => {
    toMemory();
    operator = "*";
    displayValue = "*";
    toScreen();
});

divide.addEventListener("click", () => {
    toMemory();
    operator = "/";
    displayValue = "/";
    toScreen();
});

equals.addEventListener("click", () => {
    if (firstNum !== undefined) {
        secondNum = displayValue;
        operate();
        console.log(firstNum);
        console.log(secondNum);
    }
});
