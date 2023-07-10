function store_car_info(manufacturer: string, model: string, ...options: any[]): { manufacturer: string, model: string, [key: string]: any } {
    const carInfo = {
      manufacturer: manufacturer,
      model: model
    };
  
    for (let i = 0; i < options.length; i += 2) {
      const key = options[i];
      const value = options[i + 1];
      carInfo[key] = value;
    }
  
    return carInfo;
  }
  
  // Calling the store_car_info() function with required information and additional name-value pairs
  const car = store_car_info('Toyota', 'Camry', 'color', 'blue', 'year', 2022);
  
  // Printing the returned object to ensure all information was stored correctly
  console.log(car);
  