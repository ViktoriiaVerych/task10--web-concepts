// define a base class Coffee
class Coffee {
  // define a method to get the cost of plain coffee
  cost() {
    return 5;
  }
}

// define a decorator class MilkDecorator
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee; // accept a coffee instance to decorate
  }

  // override the cost method to add the cost of milk to the base coffee
  cost() {
    return this.coffee.cost() + 2; // add 2 to the cost of the base coffee
  }
}

// create an instance of plain coffee
const plainCoffee = new Coffee();

// create an instance of coffee with milk by decorating plain coffee
const coffeeWithMilk = new MilkDecorator(plainCoffee);

// output the cost of plain coffee
console.log(plainCoffee.cost()); // Output: 5

// output the cost of coffee with milk
console.log(coffeeWithMilk.cost()); // Output: 7 (5 for coffee + 2 for milk)
