// dfine a Product class to represent a product with a name attribute
class Product {
  constructor(name) {
    this.name = name; // set the name of the product
  }
}

// define a ProductFactory class for creating Product instances
class ProductFactory {
  // method to create a new Product with a given name
  createProduct(name) {
    return new Product(name); // create a new Product instance with the specified name
  }
}

// create an instance of the ProductFactory
const factory = new ProductFactory();

// use the factory to create a new Product with the name 'Game'
const product = factory.createProduct('Game');

// output the name of the created product
console.log(product.name); // output: Game
