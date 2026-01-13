
function t1 () {
  try {
    const a = {
      b
    };
    return foo(a);
  } catch (e) {
    return bar();
  } finally {
    return finalFunc(); // BAD_FINALLY_CONTROL_FLOW alarm because this will overwirte try-catch return value.
  }
}

function t2 () {
  try {
    const a = {
      b,
      c
    };
    return foo(a);
  } catch (e) {
    return bar();
  } finally {
    return finalFunc(); // BAD_FINALLY_CONTROL_FLOW alarm because this will overwirte try-catch return value.
  }
}

async function sonar_foo() {
  let result, connection;
  try {
      connection = await connect();
      result = connection.send(1);
  } catch(err) {
      console.error(err.message);
      return foo();
  } finally {
      if (connection) {
          connection.close();
      }
      return result; // Noncompliant: Jump statement 'return' in the 'finally' block
  }
}


async function sonar_foo2() {
  let result, connection;
  try {
      connection = await connect();
      result = connection.send(1);
  } catch(err) {
      console.error(err.message);
      return foo();
  } finally {
      if (connection) {
          connection.close();
      }
      for (let i = 0; i < 10; i++) {
        let q = i + 1;
        if (q == i) {
          break; // ignored
        }
      }
      return result; // Noncompliant: Jump statement 'return' in the 'finally' block
  }
}

