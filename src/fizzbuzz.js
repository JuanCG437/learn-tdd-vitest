export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('number must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

 const multiplies = { 3: 'Fizz', 5: 'Buzz', 7: 'woff' }
 let output = ''

 Object
 .entries(multiplies)
 .forEach(([multiplier, word]) => {
  if (number % multiplier == 0) output += word;
 })

  return output == '' ? number : output;
}
