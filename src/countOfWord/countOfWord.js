const countOfWord = (str) => {
  let count = 0
  let words = str.split(' ')
  //   for (let w of words) {
  //     if (w.charAt(0) == 'а' || w.charAt(0) == 'А') {
  //       count++
  //     }
  //   }
  for (let i = 0; i < words.length; i++) {
    if (words[i].charAt(0) == 'а' || words[i].charAt(0) == 'А') {
      count++
    }
  }
  return count
}

module.exports = countOfWord
