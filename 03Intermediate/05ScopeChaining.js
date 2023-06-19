// Scope chaining:
//     Is just like asking for resource to upper/higher level.
//     Level 1: can ask resource from level above level1
//     Level 2: can ask resource from level1 
//     Level 3: can ask for resource from level2

//     level1 cannot ask to level2 and level 3

var resource = "aryan";

console.log(`line no 11, ${resource}`);

function sayHello() {
    console.log("line no 14",resource);
    getResource();

    function getResource() {
        var resource = "hi";
        console.log("line no 17",resource);
    }
}

sayHello();
