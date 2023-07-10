function store_car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Calling the store_car_info() function with required information and additional name-value pairs
var car = store_car_info('Toyota', 'Camry', 'color', 'blue', 'year', 2022);
// Printing the returned object to ensure all information was stored correctly
console.log(car);
