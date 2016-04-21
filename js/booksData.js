'use strict';
var booksData = (function() {

    var surroundWithTableDataTag = function(data) {
            return '<td>' + data + '</td>';
        },
        surroundWithTableRowTag = function(data) {
            return '<tr>' + data + '</tr>';
        },
        handleResponse = function(arr) {
            var out = '';
            for (var i = 0; i < arr.length; i++) {
                out = out + surroundWithTableRowTag(surroundWithTableDataTag(arr[i].title) + surroundWithTableDataTag(arr[i].author) + surroundWithTableDataTag(arr[i].year));
            }

            document.getElementById('booksTable').innerHTML = out;
        };

    return {
        getBooks: function() {
            var xmlhttp = new XMLHttpRequest();
            var url = 'books.json'

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var myArr = JSON.parse(xmlhttp.responseText);
                    handleResponse(myArr);
                }
            };
            xmlhttp.open('GET', url, true);
            xmlhttp.send();
        }
    };
})();
