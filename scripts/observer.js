// define a Subject class that represents the subject being observed
class Subject {
  constructor() {
    this.observers = []; // Initialize an array to store observers
  }

  // method to add an observer to the list
  addObserver(observer) {
    this.observers.push(observer);
  }

  // method to remove an observer from the list
  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  // method to notify all observers with a message
  notify(message) {
    this.observers.forEach(observer => observer.update(message));
  }
}

// define an Observer class that represents the observers
class Observer {
  constructor(name) {
    this.name = name; // assign a name to the observer
  }

  // method to update the observer with a message from the subject
  update(message) {
    console.log(`${this.name} received message: ${message}`);
  }
}

// create a Subject instance
const subject = new Subject();

// create two Observer instances with names
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

// sdd the observers to the subject's list
subject.addObserver(observer1);
subject.addObserver(observer2);

// notify all observers with a message
subject.notify('Hello, guests!');

