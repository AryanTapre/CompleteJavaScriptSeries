var user1 = ["aryan tapre","taen7@gmail.com",9490112245,"surat","gujarat","india"];
var user2 = new Array("rameshwar ishvana","ramish2gmail.com",6596478680,"Anand","gujarat","india");

console.log(user1);
console.log(user2);

user1.push("hello");
console.log(user1);

user1.pop();
console.log(user1);

user1.unshift("NEW VALUE"); // add value at beginning of array...
console.log(user1);

user1.shift();
console.log(user1); // remove value from beginning of array..

console.log(user1.indexOf("surat")); // returns index of given value from array..

console.log(Array.from("aryan")); // returns character array of given string...