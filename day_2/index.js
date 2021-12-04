/*
https://adventofcode.com/2021/day/2
*/

// Like day 1, I was given an input of 1000 lines. Same solution to extract my input from that file for my solution.
const fs = require('fs')
const input = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((x => x))

/**
 * @param {[string]} input - Expected input in the form of an array of strings that contain a two-part set of instructions separated by a space. The first being either forward, down, or up, followed by a number
 * @returns number - Representing the final horizontal position and depth of the submarine multiplied by each other
 * 
 * @example
 * part1(['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'])
 * // returns horizontal position of 15, depth of 10 => 150
 */

// loop through, slice each index, based on the string decide what to increment/decrement and by how much, return horizontal * depth

const part1 = (input) => {
  let horizontal = 0,
    depth = 0

  for (let i = 0; i < input.length; i++) {
    // Create a subarray on the expected white space. ['forward 8', 'down 5'] => [['forward', '8'], ['down', '5']] 
    let instructionSet = input[i].split(/\s/g)

    switch (instructionSet[0]) {
      case 'forward':
        horizontal += parseInt(instructionSet[1])
        break;
      case 'down':
        depth += parseInt(instructionSet[1])
        break;
      case 'up':
        depth -= parseInt(instructionSet[1])
        break;
        default:
        break;
    }
  }
  console.log(horizontal * depth)
}

part1(input)