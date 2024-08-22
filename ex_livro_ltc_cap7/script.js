/* 
Write a loop that counts from 1 to 100 and checks if the number is a multiple of 3 or 5.
If it’s a multiple of 3, it should log “Fizz” to the console.
If it’s a multiple of 5, it should log “Buzz” to the console.
If it’s a multiple of 3 and 5, it should log “FizzBuzz” to the console, 
and if it’s a multiple of neither, it should just log the number to the console.
The initial output should look something like this:
<< 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ...
Hint: you’ll need to use the modulus operator (%) for this challenge. 
*/

for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if(i % 3 === 0) {
        console.log('Fizz');
    } else if(i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

