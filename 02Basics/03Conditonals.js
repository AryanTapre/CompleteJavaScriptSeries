/** Creates application to get temperature outside
 *  created by @AryanTapre
 * on date 29.04.2023
 * 
 */

var temperature = 31;

if (temperature < 20) {
    console.log("It's COLD outside");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("It's MODERATE outside");
} else {
    console.log("It's HOT outside");
}