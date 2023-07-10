const users: string[] = []; // Example empty array

if (users.length > 0) {
  for (const user of users) {
    console.log(`Hello, ${user}!`);
  }
} else {
  console.log("We need to find some users!");
}

