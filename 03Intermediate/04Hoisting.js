/**
 * CreatedBy:@AryanTapre
 * OnDate:18-06-2023
 */


        // EXECUTION CONTEXT
        // EXECUTION CONTEXT
        // EXECUTION CONTEXT
        //  GLOBAL CONTEXT


    // GLOBAL CONTEXT   : Will Register all information from`` JS File likewise variables,
    //                   function definitations, dataTypes, and so other components
    
    // EXECUTION CONTEXT: will executes all the executable statements, registers on global context









// Important properties on Context:
//     1)  variable Object
//     2)  Scope chaining
//     3)  this keyword

// Variable declaration are scanned and made un-defined
// Function declarations are Scanned and make avaliable

//variable object defination


var callMe = function() {
    console.log(`callMe() has been called..`);
}
callMe();      // Can not call function inside variable above it's declaration

callMeFun();

var name2;
function callMeFun() {

    console.log(`callMeFun() has been called..`);
    console.log(`Value when name was not defined: ${name2}`);

    name2 = "Aryan";
    console.log(`Value after name was defined:${name2}`);

}
