// context is like a global container that registers all functions,variables and other elements of a file

yo();

function yo() {
    console.log("yo...\"hello\"");
}

// above is possible , due to context
// for browsers it's always "window"

/**
 * Context are of two types:
 *  (1) global context
 *  (2) execution context - execution of each line is due to "execution context" only
 * 
 * (2) divided into three parts.
 *     -  variable object
 *     -  scope chain
 *     -  this
 * 
 * Remember:
 *  function declaration are Scanned and made available
 *  variable declaration are scanned and made un-defined
 */

tipper("5");
function tipper(a) {
    var bill = parseInt(a);
    console.log(bill+5);
}

// bigTipper("4500");              // this will not execute,says not a function
//                                 // this will not execute,says not a function
//                                 // as declaring function inside variable and variable are Scanned but un-defined..   
// var bigTipper = function(a) {
//     var bill = parseInt(a);
//     console.log(bill+15);
// }


 
var bigTipper = function(a) {
    var bill = parseInt(a);
    console.log(bill+15);
}
bigTipper("4500");             





console.log(name);
var name = "aryan";
sayHello();

function sayHello() {
        var name= "boss";
        console.log(name);
}

console.log(name);
