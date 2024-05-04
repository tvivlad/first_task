const minimum = (a, b, c) => {
  let min
  if (a < b) {
    min = a
  } else {
    min = b
  }

  if (min > c) {
    min = c
  }
  return min
}

module.exports = minimum
// 2,3, -3  => -3

// 2,3, -3  => 2
