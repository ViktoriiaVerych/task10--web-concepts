//ensures that there is only one instance of an object
const Singleton = (() => {
  // private variables
  let instance; // unique instance of the Singleton
  let data = 0; // some data associated with the Singleton

  // private function to increment data
  const increment = () => {
    data++;
  };

  // public method to get the Singleton instance
  return {
    getInstance: () => {
      if (!instance) {
        // if an instance does not exist, create one
        instance = {
          increment, // expose the increment function
          data,     // expose the data associated with the Singleton
        };
      }
      return instance; // return the existing or newly created instance
    }
  };
})();

// get the Singleton instance
const instance1 = Singleton.getInstance();

// use the Singleton instance to increment data
instance1.increment();

// output the data associated with instance1
console.log(instance1.data); // Output: 1

// get another reference to the Singleton instance
const instance2 = Singleton.getInstance();

// output the data associated with instance2, which should be the same as instance1
console.log(instance2.data); // output: 1
