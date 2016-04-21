'use strict';
var calculatorHelper = (function() {

    return {
        calculate: function() {
            var operator = document.getElementById('operator').value;
            if(operator == "+")
            {
              var a = parseInt(document.getElementById('firstNumber').value),
                  b = parseInt(document.getElementById('secondNumber').value);
            document.getElementById('result').value = add(a, b);
            }
            if(operator == "-")
            {
              var a = parseInt(document.getElementById('firstNumber').value),
                  b = parseInt(document.getElementById('secondNumber').value);
              document.getElementById('result').value = subtract(a, b);
            }
            if(operator == "*")
            {
              var a = parseInt(document.getElementById('firstNumber').value),
                  b = parseInt(document.getElementById('secondNumber').value);
              document.getElementById('result').value = multiply(a, b);
            }
            if(operator == "/")
            {
              var a = parseInt(document.getElementById('firstNumber').value),
                  b = parseInt(document.getElementById('secondNumber').value);
              document.getElementById('result').value = divide(a, b);
            }
            if(operator == "Factorial(first number)")
            {
              var x = parseInt(document.getElementById('firstNumber').value);
              document.getElementById('result').value = factorial(x);
            }
        }
    };
})();
