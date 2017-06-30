function getNewCar() {
  return {
    'city': 'Toronto',
    'passengers': 0,
    'gas': 100
  }
}

function addCar(cars, newCar) {
  cars.push(newCar);
  console.log("Adding new car to fleet. Fleet size is now " + cars.length + ".");
}

function pickUpPassenger(car) {
  car.passengers += 1;
  car.gas -= 10;
  console.log("Picked up passenger. Car now has " + car.passengers + " passengers.");
}

function getDestination(car) {
  if (car.city === 'Toronto') {
    console.log("Mississauga");
  } else if (car.city === 'Mississauga') {
    console.log("London");
  } else if (car.city === 'London') {
    console.log("Toronto");
  }
}

function fillUpGas(car){
  oldGas = car.gas;
  car.gas = 100;
  console.log("Filled up to " + getGasDisplay(car.gas) + " on gas from " + getGasDisplay(oldGas) + ".");
}

function getGasDisplay(gasAmount){
  console.log(gasAmount + "%");
}

function drive(car,cityDistance){
  if (car.gas < cityDistance) {
    console.log(fillUpGas(car));
  }

  car.city = getDestination(car);
  car.gas -= cityDistance;
  console.log("Drove to " + car.city + ". Remaining gas: " + getGasDisplay(car.gas) + ".");
}

function dropOffPassengers(car){
  previousPassengers = car.passengers;
  car.passengers = 0;
  console.log("Dropped off " + previousPassengers + " passengers.");
}

function act(car){
  distanceBetweenCities = 50;

  if (car.gas < 20) {
    console.log(fillUpGas(car));
  } else if (car.passengers < 3) {
    console.log(pickUpPassenger(car));
  } else {
    if (car.gas < distanceBetweenCities) {
      console.log(fillUpGas(car));
    }
    droveTo = drive(car,distanceBetweenCities);
    passengersDropped = dropOffPassengers(car);
    console.log(droveTo + " " + passengersDropped);
  }
}

function commandFleet(cars){
  for(var i = 0; i < cars.length; i++) {
    var car = cars[i];
    action = act(car);
    console.log('Car ' + (1 + 1) + ": " + action);
  }
  console.log("----");
}

function addOneCarPerDay(cars,numDays) {
  for(var i = 0; i < numDays; i++) {
    var newCar = getNewCar();
    console.log(addCar(cars, newCar));
    commandFleet(cars);
  }
}

cars = [];
addOneCarPerDay(cars, 10);
