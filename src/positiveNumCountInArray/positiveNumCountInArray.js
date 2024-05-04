const positiveNumCountInArray = (ar) => {
  let count = 0
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > 0) {
      count++
    }
  }

  return count
}

module.exports = positiveNumCountInArray
