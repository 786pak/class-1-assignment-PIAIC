let personName: string = "Maria Umeed";

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTitleCase(personName));

function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt: string) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}


