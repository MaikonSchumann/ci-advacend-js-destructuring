/**
 * To run this file in Gitpod, use the
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 27, 26];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
// This operation allows us to assign the ages to the intens of an array
// following the order

console.log(john, mary, joe);

// Destructuring objects
let jobs = {
  mike: "designer",
  jill: "developer",
  alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
  firstLanguage: "english",
  secondLanguage: "french",
  thirdLanguage: "german",
  fourthLanguage: "japanese",
};
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
  brian: "pizza",
  anna: "pastas",
  sarah: "vegetarian",
  andrea: "steak",
};
let { brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
