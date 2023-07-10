// Guests invited to the dinner
var guests = ['Ali', 'Saima', 'Anum'];
// Print original invitation messages
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add a new guest to the beginning of the array
guests.unshift('Safa');
// Add a new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, 'Abida');
// Use push() to add one new guest to the end of the list
guests.push('Burhan');
// Print new invitation messages
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
