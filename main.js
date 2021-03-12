
const op = require('./operations')

console.log(op.add(10, 11))
console.log(op.sub(10, 5))
console.log(op.mul(2, 10))
console.log(op.div(5, 3))
console.log(op.modulo(5, 3))


//console.log('Hello, Word!!')

console.log(op.myString)

/* calc('*', 10, 10)*/  /*calc(MUL_OP, 10, 10)*/

const readline = require('readline-sync')
const chalk = require('chalk')
const calc = require('./calc')

while (true) {
  //demander l'opération
  const op = readlineSync.question('Operation:')

  //demander nb1
  let nb1 = readlineSync.question('nb1: ')
  nb1 = Number(nb1)

  //demander nb2
  let nb2 = readlineSync.question('nb2: ')
  nb2 = Number(nb2)

  console.log(chalk.green.bold(calc(op, nb1, nb2)))

}