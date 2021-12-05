/*
https://adventofcode.com/2021/day/2
*/

const fs = require('fs')
const input = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((x => x.split('')))
// console.log(input)
/**
 * @param {[[binary], [binary], ...[binary]]} input - Expected input in the form of a two-dimensional array. Each subarray contains a string of binary code
 * @var gamma The most common bit from each column
 * @var epsilon the inverse of the gamma
 * @returns epsilon * gamma
 * 
 * @example
 * part1([
 * [00100],
 * [11110],
 * [10110],
 * [10111],
 * [10101],
 * [01111],
 * [00111],
 * [11100],
 * [10000],
 * [11001],
 * [00010],
 * [01010]]) => gamma = 10110, epsilon = 01001, 198 in decimal
 */

/**
 * 
 * @param {[['binary']]} input 
 * @param {number} n 
 * @returns []number
 * 
 * @example inputCol([
 * [100101001000],
 * [011101110101],
 * [000001010101],
 * [001001010001],
 * [001101011110]
 * ], 0) => [10000]
 */
const inputCol = (input, n) => input.map(x => parseInt(x[n]))

/**
 * 
 * @param {'binary'} gamma 
 * @returns inverse binary string
 */
const inverseGamma = (gamma) => {
  return gamma.split('').map(el => {
    return `${1 - parseInt(el, 10)}`
  }).join('')
}

const part1 = (input) => {
  let gamma = '', epsilon = ''

  for (let i = 0; i < 12; i++) {
    const col = inputCol(input, i)
    let oneBit = 0, zeroBit = 0
    // console.log(col)
    for (let j = 0; j < col.length; j++) {

      if (col[j] === 1) {
        oneBit++
      } else if (col[j] === 0) {
        zeroBit++
      }
    }

    if (oneBit > zeroBit) {
      gamma += '1'
    } else if (zeroBit > oneBit) {
      gamma += '0'
    }
  }
  epsilon = inverseGamma(gamma)
  console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))
}

part1(input)
