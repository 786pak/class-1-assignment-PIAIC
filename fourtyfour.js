function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    console.log("Bread");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
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
