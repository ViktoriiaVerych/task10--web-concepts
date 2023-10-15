class Singleton {
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
      this.data = 0;
      Singleton.instance = this;
    }
  
    increment() {
      this.data++;
    }
  }
  
  const instance1 = new Singleton();
  instance1.increment();
  console.log(instance1.data); 
  
  const instance2 = new Singleton();
  console.log(instance2.data);
  