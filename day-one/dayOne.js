import fs from 'fs/promises';

async function example() {
  try {
    const data = await fs.readFile('./input.txt', { encoding: 'utf8' });
    console.log(data);
    //splitting the string into an array of lines
    const lines = data.trim().split('\n');
    //initialize variables for tracking current and maximum sum
    let maxSum = 0;
    let currentSum = 0;
    //loop through each line and add its value to the current sum
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line !== '') {
        //if line is not empty, split it into individual members and add them to the current sum
        const numbers = line.split(' ').map(Number);
        currentSum += numbers.reduce((acc, curr) => acc + curr, 0);
        //if n has not been set yet, set it to the number of words in this set of numbers
      }
      //if line is empty or we've reached the end of a set of numbers, update  maximum sum and reset the current sum
      if (line === '' || i === lines.length - 1) {
        maxSum = Math.max(maxSum, currentSum);
        currentSum = 0;
        console.log('maximum sum: ', maxSum);
      }
    }
  } catch (err) {
    console.log(err);
  }
}
example();
