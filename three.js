var personName = "Maria Umeed";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTitleCase(personName));
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
