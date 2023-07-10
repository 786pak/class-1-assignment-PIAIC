function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    const modifiedMagicians: string[] = [];
  
    for (let i = 0; i < magicians.length; i++) {
      modifiedMagicians[i] = `the Great ${magicians[i]}`;
    }
  
    return modifiedMagicians;
  }
  
  // Array of magician's names
  const magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
  // Call the make_great() function with a copy of the original array
  const modifiedMagicians: string[] = make_great([...magicians]);
  
  // Call the show_magicians() function with the original array
  console.log("Original Magicians:");
  show_magicians(magicians);
  
  console.log("--------------------------");
  
  // Call the show_magicians() function with the modified array
  console.log("Modified Magicians:");
  show_magicians(modifiedMagicians);
  