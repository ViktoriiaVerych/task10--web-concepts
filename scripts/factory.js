class Product {
    constructor(name) {
      this.name = name;
    }
  }
  
  class ProductFactory {
    createProduct(name) {
      return new Product(name);
    }
  }
  
  const factory = new ProductFactory();
  const product = factory.createProduct('Game');
  console.log(product.name); 
  