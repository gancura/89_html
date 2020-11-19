"use strict";

var num = 10;
var numF = "10";

console.log (num + Number(+numF));
console.log (num - Number(numF));

var num = 10;
var numF = "1";
console.log (num / numF);

var num = 20;
var numF = "10";
console.log (num * numF);

var num = 20;
var numF = "10";
console.log (num > numF);

var num = 10;
var numF = "20";
console.log (num < numF);

var num = 10;
var numF = "10";
console.log (num >= numF);
console.log (num <= numF);
console.log (num == numF);

var num = 20;
var numF = "10";
console.log (num != numF);
console.log (num !== numF);

var num = 10;
var numF = "10";
console.log (num === Number(numF));

var wordNull = null;
console.log(typeof wordNull)

var num = 10;
var numF = 0.5;

console.log ( num + numF );
console.log ( num - numF );
console.log ( num / numF );
console.log ( num * numF );

var num = 0.9;
var numF = 1.1;
console.log ( num > numF );

var num = 1.1;
var numF = 0.1;
console.log ( num < numF );

var num = 0.9;
var numF = 0.90000001;
console.log ( num >= numF );

var num = 1.1;
var numF = 0.1;
console.log ( num <= numF );
console.log ( num == numF );

var num = 1.1;
var numF = 1.1;
console.log ( num != numF );
console.log ( num !== numF );

var num = 1.1;
var numF = "1.1";
console.log (num === numF);