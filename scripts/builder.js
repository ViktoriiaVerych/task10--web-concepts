class Product {
    constructor(name, price, color) {
      this.name = name;
      this.price = price;
      this.color = color;
    }
  }
  
  class ProductBuilder {
    constructor(name) {
      this.product = new Product(name);
    }
  
    setPrice(price) {
      this.product.price = price;
      return this;
    }
  
    setColor(color) {
      this.product.color = color;
      return this;
    }
  
    build() {
      return this.product;
    }
  }
  
  const product = new ProductBuilder('Widget')
    .setPrice(10)
    .setColor('Red')
    .build();
  
  console.log(product);
  