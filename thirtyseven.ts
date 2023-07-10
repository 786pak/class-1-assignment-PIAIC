function make_shirt(size: string = 'L', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size}. The message printed on the shirt is: ${message}`);
  }
  
  // Large shirt with default message
  make_shirt();
  
  // Medium shirt with default message
  make_shirt('M');
  
  // Custom-sized shirt with a different message
  make_shirt('S', 'Hello, World!');
  