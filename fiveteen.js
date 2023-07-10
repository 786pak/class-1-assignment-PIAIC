var guestList = ["Ambreen", "Aisha", "Abida"];
// Update the guest who can't make it
var guestIndex = guestList.indexOf("Aisha");
if (guestIndex !== -1) {
    guestList.splice(guestIndex, 1);
}
// Add a new guest
guestList.push("Asma");
// Print invitation messages
for (var i = 0; i < guestList.length; i++) {
    var message = "Dear ".concat(guestList[i], ", you are cordially invited to dinner. We would be delighted to have your presence.");
    console.log(message);
}
