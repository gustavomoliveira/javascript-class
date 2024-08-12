/* 
Create a variable called shoppingList that starts as an empty array.
Experiment using pop, push, shift, unshift and splice, along with the spread operator
to add and remove items from the list. 
*/

let shoppingList = [];
let shoppingList2 = ["candy", "chocolate", "cookies", "soda"];
shoppingList.unshift("shirt");
shoppingList.push("skirt");
shoppingList.unshift("socks");
shoppingList.shift();
shoppingList.pop();


shoppingList.push("wallet");
shoppingList.push("jacket");
shoppingList.push("top");
shoppingList.push("trousers");
shoppingList.push("backpack");

shoppingList.splice(1, 1, "bag");
console.log(shoppingList);

shoppingList.unshift(...shoppingList2);
console.log(shoppingList);

/* 
Use three prompt boxes to ask the user for three different
words and then place them in an array.
Use console.log to display the array.
*/

let prompt1 = prompt("Type the first random word: ");
let prompt2 = prompt("Type the second random word: ");
let prompt3 = prompt("Type the third random word: ");

let allWords = [];
allWords.push(prompt3);
allWords.unshift(prompt2);
allWords.unshift(prompt1);

console.log(allWords);

/* 
Use a prompt box to ask the user to enter a word.
Then use the a combination of the split, reverse() and join() methods to write the word backwards.
For example, “hello” would become “olleh”.
(Hint: provide an empty string as the parameter to the split() and join() methods.)
*/

let word = prompt('Type a random word: ');

let arr = word.split('');
console.log(arr);

let arr1 = arr.reverse().join('');
console.log(arr1);

/* 
Write a snippet of code that asks the user for a list of comma-separated names
in a prompt and that then creates an alert that displays the names in alphabetical order.
*/

let names = prompt("Type some comma-separated names: ");

let arrNames = names.split(', ').sort();//, seguida de espaço para que funcione a remoção da vírgula e separador
console.log(arrNames);