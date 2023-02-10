
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

delete myArray[2];  // Noncompliant. myArray => ['a', 'b', undefined, 'd']
console.log(myArray[2]); // expected value was 'd' but output is undefined

function multiply(a = 1, b) {  // Noncompliant
  return a*b;
}

var x = multiply(42);  // returns NaN as b is undefined


function MyClass(name, strings) {
  name = foo;                    // Noncompliant

  for (var str of strings) {
    str = "";  // Noncompliant
  }
}
