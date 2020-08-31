//implemente uma funcao 'summationOf(number) que recebe um numero inteiro e retorna o seu somatorio
//exemplo summation(5) retorna => 5+4+3+2+1 = 15

const assert = require('assert');
const summationOf = number => {
  let summation = 0;

  for (let value = 1; value <= number; value += 1){
    summation += value;
  }
  return summation
};


assert.strictEqual(typeof(summationOf), "function");
assert.strictEqual(summationOf(1), 1);
assert.strictEqual(summationOf(3), 6);
assert.strictEqual(summationOf(5), 15);
assert.strictEqual(summationOf(0), 0);