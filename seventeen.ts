// Guests invited to the dinner
let guests: string[] = ['Ali', 'Safa', 'Abida', 'Saima', 'Anum', 'Burhan'];

// Print original invitation messages
for (let guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Inform about the smaller dinner table
console.log("Bad news! The new dinner table won't arrive in time.");

// Print message for inviting only two people
console.log("Unfortunately, we can only invite two people for dinner.");

// Remove guests until only two names remain in the list
while (guests.length > 2) {
  const removedGuest = guests.pop(); // Remove the last guest from the list
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner anymore.`);
}

// Print final invitation messages for the remaining two guests
for (let guest of guests) {
  console.log(`Dear ${guest}, you are still invited to dinner.`);
}

// Empty the list
guests = [];

// Print the list to confirm it is empty
console.log(guests);
