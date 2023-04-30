/** Create application to get discount from list and selling price given.
 *  formula : (((list-selling)/list)*100) 
 * created by @AryanTapre
 * on date 29.04.2023
 * 
 */

var listingPrice = 799;
var sellingPrice = 199;

var discountPrice = (((listingPrice - sellingPrice) / listingPrice) * 100);

var displayDiscount = Math.round(discountPrice);

console.log("discount is :"+
        "\""+displayDiscount+"\" % off"
);