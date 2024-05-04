// @ts-nocheck
const minimum = require('./minimum.js')

describe('minimal function tests', () => {
  test('positive numbers', () => {
    expect(minimum(2, 1, 12)).toBe(1)
  })

  test('test with zero', () => {
    expect(minimum(2, 1, 0)).toBe(0)
  })
  test('test with all zero', () => {
    expect(minimum(0, 0, 0)).toBe(0)
  })

  test('test with negative numbers', () => {
    expect(minimum(-2, 4, -9)).toBe(-9)
  })
})
