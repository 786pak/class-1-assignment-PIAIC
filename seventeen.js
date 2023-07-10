// Guests invited to the dinner
var guests = ['Ali', 'Safa', 'Abida', 'Saima', 'Anum', 'Burhan'];
// Print original invitation messages
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
// Inform about the smaller dinner table
console.log("Bad news! The new dinner table won't arrive in time.");
// Print message for inviting only two people
console.log("Unfortunately, we can only invite two people for dinner.");
// Remove guests until only two names remain in the list
while (guests.length > 2) {
    var removedGuest = guests.pop(); // Remove the last guest from the list
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner anymore."));
}
// Print final invitation messages for the remaining two guests
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
// Empty the list
guests = [];
// Print the list to confirm it is empty
console.log(guests);
