// @ts-nocheck
const countOfWord = require('./countOfWord')

describe('countOfWord tests', () => {
  test('with one space', () => {
    expect(countOfWord('абрикос банан арбуз')).toBe(2)
  })

  test('with one space and capitall A letter', () => {
    expect(countOfWord('абрикос банан арбуз Ананас Апельсин')).toBe(4)
  })

  test('with one space and capitall A letter', () => {
    expect(countOfWord('абрикос банан арбуз Ананас Апельсин')).toBe(4)
  })
})
