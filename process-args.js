// print process.argv
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})

//length of process.argv
console.log(`nb args: ${process.argv.length}`)