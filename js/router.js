'use strict';
var router = (function() {
    var calculatorSection = document.getElementById('calculator'),
        xmlHttpRequestDemoSection = document.getElementById('XMLHttpRequestDemo');

    return {
        setInitialState: function() {
            xmlHttpRequestDemoSection.style.display = 'none';
        },
        showXmlHttpRequestDemoSection: function() {
            calculatorSection.style.display = 'none';
            xmlHttpRequestDemoSection.style.display = 'block';
        },
        showCalculatorSection: function() {
            xmlHttpRequestDemoSection.style.display = 'none';
            calculatorSection.style.display = 'block';
        }
    };
})();
