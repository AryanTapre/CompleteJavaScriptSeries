// role based function for
// admin,subadmin,user,testprep,other

// we can declare function,inside a variable.
var getUserRole = function(name,role) {

    switch (role) {
        case "admin":
            return `${name} is admin`;
           
        case "subadmin":
            return `${name} is sub admin`;
            
        case "user":
            return `${name} is user`;
           
        case "testprep":
            return `${name} is test prep`;
          
        default:
            return `no access for ${name}`;
            break;
    }
}

var getRole = getUserRole("aryan","subadmin");
console.log(getRole);