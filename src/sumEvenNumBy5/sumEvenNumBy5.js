const sumEvenNumBy5 = (a, b) => {
  let sum = 0
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      if (i % 5 == 0) {
        sum += i
      }
    }
  }
  return sum
}

// [0,23] => 30

module.exports = sumEvenNumBy5
