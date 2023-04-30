/** falsy values------>
 *  undefined : 
 *  null
 *  0
 *  '' : empty string
 *  NaN : Not a Number
 * 
 * created by @AryanTapre
 * on date 29.04.2023
 */


// if will not execute with any of these Falsy values
var user  = NaN;
if(user) {
    console.log("true values");
}

user = "2";
if(2 === user) {  // to check the DataType as Well..
    console.log("condition is true");
}