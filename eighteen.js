var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of places to visit
var placesToVisit = ['Paris', 'Tokyo', 'New York', 'Rome', 'Sydney'];
// Print original order
console.log("Original Order:");
console.log(placesToVisit);
// Print alphabetical order without modifying the actual list
console.log("Alphabetical Order (without modifying the original list):");
console.log(__spreadArray([], placesToVisit, true).sort());
// Show that the original order is still intact
console.log("Original Order (still intact):");
console.log(placesToVisit);
// Print reverse alphabetical order without modifying the actual list
console.log("Reverse Alphabetical Order (without modifying the original list):");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Show that the original order is still intact
console.log("Original Order (still intact):");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:");
console.log(placesToVisit);
// Reverse the order of the list again to restore the original order
placesToVisit.reverse();
console.log("Original Order (restored):");
console.log(placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical Order:");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:");
console.log(placesToVisit);
