/** allow user to access course if he/she is
 *  logged in from Google
 *  logged in from FaceBook
 *  logged in from Email
 *  
 * 
 * created by @AryanTapre
 * on date 29.04.2023
 */

var email = true;
var google = false;
var facebook = false;

if(email || google || facebook) {
    console.log("have access to content!");
}