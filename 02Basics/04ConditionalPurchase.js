/** User is only allowed to make a purchase if he is:
 *  logged in
 *  email verified
 *  cardinfo-valid
 *  if any one is missing , stop purchase
 * 
 *  created by @AryanTapre
 * on date 29.04.2023
 */

var isLoggedIn = true;
var isEmailVerified = false;
var cardinfo = true;

if(isLoggedIn && isEmailVerified && cardinfo) {
    console.log("Make a purchase");
} else {
    console.log("stop purchasing");
}
