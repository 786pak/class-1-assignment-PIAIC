let car = 'subaru';
let age = 25;
let fruits = ['apple', 'banana', 'orange'];

console.log("Tests for equality and inequality with strings:");
console.log(car == 'subaru');
console.log(car != 'honda');
console.log(car == 'Subaru');
console.log(car != 'subaru');

console.log("\nTests using the lowercase function:");
console.log(car.toLowerCase() == 'subaru');
console.log(car.toLowerCase() == 'SUBARU');

console.log("\nNumerical tests:");
console.log(age == 25);
console.log(age != 30);
console.log(age > 20);
console.log(age < 30);
console.log(age >= 25);
console.log(age <= 20);

console.log("\nTests using 'and' and 'or' operators:");
console.log(car == 'subaru' && age == 25);
console.log(car == 'subaru' || age == 30);

console.log("\nTests for item presence in an array:");
console.log(fruits.includes('apple'));
console.log(fruits.includes('kiwi'));

console.log("\nTests for item absence in an array:");
console.log(!fruits.includes('grape'));
console.log(!fruits.includes('banana'));


