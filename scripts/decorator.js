class Coffee {
    cost() {
      return 5;
    }
  }
  
  class MilkDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost() + 2;
    }
  }
  
  const plainCoffee = new Coffee();
  const coffeeWithMilk = new MilkDecorator(plainCoffee);
  
  console.log(plainCoffee.cost()); 
  console.log(coffeeWithMilk.cost()); 
  