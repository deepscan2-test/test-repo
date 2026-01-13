
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
      return foo(); // 이 리턴값은 finally의 return에 의해 무시됩니다.
  } finally {
      if (connection) {
          connection.close();
      }

      // 복잡도 증가 구간: 중첩된 제어 흐름 및 선형 오프셋 계산 로직
      let offset = 10;
      for (let i = 0; i < 10; i++) {
        let q = i + offset;
        
        // 추가된 로직: 인지적 복잡도를 높이는 조건문
        if (q > 15) {
          if (q % 2 === 0) {
            console.log("Processing even offset...");
          } else {
            console.log("Processing odd offset...");
          }
        } else if (q === i) {
          break; // S1143의 또 다른 잠재적 위반 (finally 내 break)
        }
      }

      // S1143 핵심 위반: try/catch의 리턴을 덮어씌움
      return result; 
  }
}
