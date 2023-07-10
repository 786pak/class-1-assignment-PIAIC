var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modifiedMagicians[i] = "the Great ".concat(magicians[i]);
    }
    return modifiedMagicians;
}
// Array of magician's names
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Call the make_great() function with a copy of the original array
var modifiedMagicians = make_great(__spreadArray([], magicians, true));
// Call the show_magicians() function with the original array
console.log("Original Magicians:");
show_magicians(magicians);
console.log("--------------------------");
// Call the show_magicians() function with the modified array
console.log("Modified Magicians:");
show_magicians(modifiedMagicians);
