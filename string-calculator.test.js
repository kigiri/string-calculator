const stringCalculator = require('./string-calculator.js')

test('can add', () => {
  const result = stringCalculator.add('1')
  expect(result).toBe(-1)
})
