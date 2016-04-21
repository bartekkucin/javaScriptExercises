'use strict';

var add = function(x,y) {
  if (isNaN(x) || isNaN(y)) {
      throw new Error('incorrect numbers');
  }
  return x + y;
};

var subtract = function(x,y) {
  if (isNaN(x) || isNaN(y)) {
      throw new Error('incorrect numbers');
  }
  return x - y;
};

var multiply = function(x,y) {
  if (isNaN(x) || isNaN(y)) {
      throw new Error('incorrect numbers');
  }
  return x * y;
};

var divide = function(x,y) {
  if (y === 0) {
      throw new Error('division by zero');
  }
  if (isNaN(x) || isNaN(y)) {
      throw new Error('incorrect numbers');
  }
  return x / y;
};

var factorial = function(x) {
  if (isNaN(x)) {
      throw new Error('incorrect number');
  }
  if (x < 0) {
      throw new Error('negative argument')
  }
  var acc = 1;
  var i = 1;
  for(i; i<= x; i++) {
    acc = acc * i;
  }
  return acc;
};
