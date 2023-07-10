var currentUsers = ['John', 'emma', 'david', 'sarah', 'james'];
var newUsers = ['john', 'peter', 'david', 'Hera', 'michael'];
var currentUsersLower = currentUsers.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (currentUsersLower.includes(newUser.toLowerCase())) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
