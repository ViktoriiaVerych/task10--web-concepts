// define a Product class to represent a product with name, price, and color attributes
class Product {
    constructor(name, price, color) {
                        //set the: 
      this.name = name;   //  name of the product
      this.price = price; //  price of the product
      this.color = color; //  color of the product
    }
  }
  
  // define a ProductBuilder class for constructing Product instances
  class ProductBuilder {
    constructor(name) {
      this.product = new Product(name); // create a new product with the given name
    }
  
    // method to set the price of the product
    setPrice(price) {
      this.product.price = price; // set the price of the product
      return this; // return the builder instance for method chaining
    }
  
    // method to set the color of the product
    setColor(color) {
      this.product.color = color; // set the color of the product
      return this; // return the builder instance for method chaining
    }
  
    // method to build and return the final Product instance
    build() {
      return this.product; // return the fully constructed product
    }
  }
  
  // create a Product using the ProductBuilder, setting its attributes
  const product = new ProductBuilder('Widget')
    .setPrice(10)
    .setColor('Red')
    .build(); // build the final product
  
  console.log(product); // output the fully constructed product
  