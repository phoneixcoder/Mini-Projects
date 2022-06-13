"use strict";

var button = document.getElementsByClassName('button');

var display = document.getElementById('output-screen');

var operator = null;
var operand1 = 0;
var operand2 = null;

for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click' , function(){
        var value = this.getAttribute('data-value');
        if (value == "+" || value == "-" || value == "*" || value == "/") {
            operator = value;
            operand1 = parseFloat(display.textContent);
            if (value == "*") {
                display.innerText = "x"
            }
            else{
                display.innerText = value;
            }
        }else if (value == "=") {
            operand2 = parseFloat(display.textContent);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }else if (value =="x^2") {
            
        }
        else if (value == "CE") {
            operand1 = null;
            operand2 = null;
            operator = null;
            display.innerText = "";
        }
        else{

            if (operator != null) {
                display.innerText = "";
            }

            display.innerText += value;
        }
    });
}