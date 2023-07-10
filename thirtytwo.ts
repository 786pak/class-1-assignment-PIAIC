const currentUsers: string[] = ['John', 'emma', 'david', 'sarah', 'james'];
const newUsers: string[] = ['john', 'peter', 'david', 'Hera', 'michael'];

const currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

for (const newUser of newUsers) {
  if (currentUsersLower.includes(newUser.toLowerCase())) {
    console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${newUser}' is available.`);
  }
}
