// showStars.js

const showStars = (nbStars) => {
  for (let i = 1; i <= nbStars; i += 1) {
    console.log('*'.repeat(i))
  }
}


let nbStars = process.argv[2]
nbStars = Number(nbStars)
showStars(nbStars)


