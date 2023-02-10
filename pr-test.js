
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
