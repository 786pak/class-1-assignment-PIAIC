// Guests invited to the dinner
let guests: string[] = ['Ali', 'Saima', 'Anum'];

// Print original invitation messages
for (let guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
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
for (let guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
}


