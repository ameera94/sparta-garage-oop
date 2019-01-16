function Car(make, type, colour, engine) {
  this.make = make;
  this.type = type;
  this.colour = colour;
  this.engine = engine;
}

class Garage {
  constructor(name, location, owner, capacity) {
    this.name = name;
    this.location = location;
    this.owner = owner;
    this.capacity = capacity;
    this.cars = [];
  }

  carBuilder(make, type, colour, engine) {
    const newCar = new Car(make, type, colour, engine);
    this.cars.push(newCar);
  }

  static randomCarGenerator() {
    const carType = ["Mercedes G-Wagon", "Porsche 911", "BMW X6", "Volkswagen Golf", "Audi RSX", "Fiat 500"];
    const randomNumber1 = Math.floor(Math.random() * 6);
    const randomColour = ["Shocking Pink", "Baby Blue", "Lime Green", "Cherry Red", "Matte Black", "Metallic Orange"];
    const randomNumber2 = Math.floor(Math.random() * 6);
    return (`${randomColour[randomNumber2]} ${carType[randomNumber1]}`);
  }

  randomLoop() {
    genStatus = true;
    const randomGen = prompt("Would you like to create a car from the random generator?");
    if (randomGen.toLowerCase === "yes") {
      genStatus = true;
    } else {
      genStatus = false;
    }
  }

  while(genStatus) {
    confirm(`You got a ${printRandomGen()}. Would you like to try again?`);
  }

}

const newGarage = new Garage("The Arches", "Walford", "Phillip", 3);

newGarage.carBuilder("Mercedes", "Coupe", "Red", 1.8);
newGarage.carBuilder("Audi", "Convertible", "White", 5.2);
newGarage.carBuilder("BMW", "SUV", "Black", 3.0);
newGarage.carBuilder("Mini", "Hatchback", "Red", 1.6);


console.log(newGarage.cars);

console.log(Garage.randomCarGenerator());


