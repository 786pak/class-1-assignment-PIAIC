function make_shirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, ". The message printed on the shirt is: ").concat(message));
}
// Large shirt with default message
make_shirt();
// Medium shirt with default message
make_shirt('M');
// Custom-sized shirt with a different message
make_shirt('S', 'Hello, World!');
