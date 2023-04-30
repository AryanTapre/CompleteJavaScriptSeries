/** Create application with following roles 
 *  admin - full access
 *  subadmin - access to create/delete courses
 *  testprep - access to crete/delete test
 *  user - access to consume content
 * 
 * created by @AryanTapre
 * on date 29.04.2023
 */

var user = "testprep" ;

switch (user) {
    case "admin":
        console.log("full access");
        break;
    case "subadmin":
        console.log("Access to create/delete course");
        break;
    case "testprep":
        console.log("Access to create/delete tests");
        break;
    case "user":
        console.log("Access to consume content");
        break;

    default:
        console.log("Trial user");
        break;
}