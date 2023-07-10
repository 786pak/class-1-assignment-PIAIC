function make_sandwich(...items: string[]): void {
    console.log("Sandwich order:");
    console.log("Bread");
  
    for (const item of items) {
      console.log(item);
    }
  
    console.log("Bread");
    console.log("Enjoy your sandwich!");
    console.log("---------------------");
  }
  
  // Calling the make_sandwich() function with different number of arguments
  make_sandwich('Ham', 'Cheese');
  make_sandwich('Turkey', 'Lettuce', 'Tomato');
  make_sandwich('Peanut Butter', 'Jelly', 'Banana', 'Honey');
  