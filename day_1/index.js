/*
https://adventofcode.com/2021/day/1
*/

// Advent of Code requires my answer not my solution, thus I have written my solution in such a way that I can execute it from the terminal and pass in my given input.
const fs = require('fs')
const input = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter(x => Boolean(x))
  .map((x => parseInt(x)))
  
/**
 * @param {[number]} input - Expected input in the form of an array of numbers, without a known length
 * @returns number - Representing the number of times that the next index increased over the previous index
 * 
 * @example
 * solution([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])
 * // returns 7
 */  
const solution = (input) => {
  let inc = 0
  let arr = []
  for (let i = 0; i < input.length; i++) {
    arr.push(input[i])
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      inc++
    }
  }
  return inc
}
console.log(solution(input))
