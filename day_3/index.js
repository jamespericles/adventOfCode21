/*
https://adventofcode.com/2021/day/2
*/

const fs = require('fs')
const input = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((x => x.split('')))
// This converts input into a 2D array of strings for each bit

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

/**
 * @param {[[binary], [binary], ...[binary]]} input - Expected input in the form of a two-dimensional array. Each subarray is of equal length and contains a string of binary code
 * @var gamma The most common bit from each column
 * @var epsilon the inverse of the gamma
 * @returns {number} epsilon * gamma
 * 
 * @example part1([
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
const part1 = (input) => {
  let gamma = '', epsilon = ''
  let subarrayLen = input[0].length

  for (let i = 0; i < subarrayLen; i++) {
    const col = inputCol(input, i)
    let oneBit = 0, zeroBit = 0

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

// part1(input)

/**
 * 
 * @param {[binary]} col 
 * @returns The most common bit, either 0 or 1, as an integer
 */
const commonBit = (col) => {
  let one = 0, zero = 0, common
  for (let i = 0; i < col.length; i++) {
    if (col[i] === 1) {
      one++
    } else if (col[i] === 0) {
      zero++
    }
  }
  if (one > zero || one === zero) {
    return common = 1
  } else {
    return common = 0
  }
}

const findOxygen = (col, i, input) => {
  let mostCommon = commonBit(col)

  input.filter(el => el[i] === mostCommon)

  // if (input[i] !== mostCommon) {
  //   input.slice(i, 1)
  // }
  console.log(input)
  // console.log(input.filter((el) => {  console.log(el[i] === mostCommon) }))
}

const part2 = (input) => {

  for (let i = 0; i < 12; i++) {
    const col = inputCol(input, i)
    findOxygen(col, i, input)
  }
  
}

part2(input)