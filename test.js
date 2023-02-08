
class Animal {}
class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
    super();         // Noncompliant
    super.doSomething();
  }
}

var myArray = ['a', 'b', 'c', 'd'];
