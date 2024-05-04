// @ts-nocheck
const sumEvenNumBy5 = require('./sumEvenNumBy5')
describe('sumEvenNumBy5 tests', () => {
  test(' [0,23]', () => {
    expect(sumEvenNumBy5(0, 23)).toBe(30)
  })
  test(' [-15,23]', () => {
    expect(sumEvenNumBy5(-15, 23)).toBe(20)
  })
  test(' [0,0]', () => {
    expect(sumEvenNumBy5(0, 0)).toBe(0)
  })
})
