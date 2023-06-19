/*
 Define a function that can answer Role of user
 admin- with all access
 subadmin-with access to create/delete courses
 testprep-with access to create/delete tests
 user-consume all content
 other-trial user 

 Input: getUserRole(name,role);
 */

var getUserRole = function(name,role) {
    switch(role) {
        case "admin":
            return `${name} is with all access`;
        case "subadmin":
            return `${name} is with access to create/delete courses`;
        case "testprep":
            return `${name} is with access to create/delete tests `;
        case "user":
            retunr `${name} will consume all content`;
        default :
            return `${name} is the TRIAL user`;
    }
}

var role = getUserRole("aryan",);
console.log(role);

