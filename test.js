
class Animal {}
class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
    super();         // Noncompliant
    super.doSomething();
  }
}
function f(){
  i = 1;         // Noncompliant; i is global

  for (j = 0; j < array.length; j++) {  
  }
}

f();
function f(){
  i = 1;         // Noncompliant; i is global

  for (j = 0; j < array.length; j++) {  
  }
}
