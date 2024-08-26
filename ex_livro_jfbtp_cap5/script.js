/* 
Practice exercise 5.1
In this exercise we will create a number guessing game that takes user input and replies based on how accurate the user's guess was.
    Create a variable to be used as the max value for the number guessing game.
    Generate a random number for the solution using Math.random() and Math.floor().
    You will also need to add 1 so that the value is returned as 1-[whatever the set max value is].
    You can log this value to the console for development to see the value as you create the game,
    then when the game is complete you can comment out this console output.
    Create a variable that will be used for tracking whether the answer is correct or not and set
    it to a default Boolean value of false. We can update it to be true if the user guess is a match.
    Use a while loop to iterate a prompt that asks the user to enter a number between 1 and 5,
    and convert the response into a number in order to match the data type of the random number.
    Inside the while loop, check using a condition to see if the prompt value is equal to the solution number.
    Apply logic such that if the number is correct, you set the status to true and break out of the loop.
    Provide the player with some feedback as to whether the guess was high or low, and initiate another
    prompt until the user guesses correctly. In this way we use the loop to keep asking until the solution
    is correct, and at that point we can stop the iteration of the block of code.
*/

let maxValue = 5;
let randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(randomNumber)
let userValue = parseInt(prompt('Enter a number between 1 and 5'));

while(userValue !== randomNumber) {
    if(userValue > randomNumber) {
        alert(`The number is lower than ${userValue}.`);
        userValue = parseInt(prompt('Enter another number between 1 and 5.'));
    } else if(userValue < randomNumber) {
        alert(`The number is higher than ${userValue}.`);
        userValue = parseInt(prompt('Enter another number between 1 and 5.'));
    } 
}
alert('Your guess is right! You won the game!');

/* 
Practice exercise 5.2
In this exercise, we will create a basic counter that will increase
a dynamic variable by a consistent step value, up to an upper limit.
    Set the starting counter to 0
    Create a variable, step, to increase your counter by
    Add a do while loop, printing the counter to the console and incrementing it by the step amount each loop
    Continue to loop until the counter is equal to 100 or more than 100
*/

let counter = 0;
let step = 0;

do {
    counter = step;
    console.log(counter);
    step++;
} while(counter <= 100);

/* 
Practice exercise 5.3
In this exercise we will use a for loop to create an array that holds objects.
Starting with creating a blank array, the block of code within the loop will
create an object that gets inserted into the array.
    Setup a blank array, myWork.
    Using a for loop, create a list of 10 objects, each of which is a numbered lesson
    (e.g. Lesson 1, Lesson 2, Lesson 3….) with an alternating true/false status for every other
    item to indicate whether the class will be running this year. For example:
    name: 'Lesson 1', status: true
    You can specify the status by using a ternary operator that checks whether the modulo of the
    given lesson value is equal to zero and by setting up a Boolean value to alternate the values each iteration.
    Create a lesson using a temporary object variable, containing the name (lesson with the numeric value)
    and predefined status (which we set up in the previous step).
    Push the objects to the myWork array.
    Output the array to the console.
*/

let myWork = [];

for(let i = 1; i <= 10; i++) {
    let stat = i % 2 == 0 ? true : false; //armazena o valor do ternário em uma variável;
    let lessons = {name: `Lesson ${i}`, status: stat}; //template string + valor do ternário;
    myWork.push(lessons); 
}
console.log(myWork);


/* 
Practice exercise 5.4
In this exercise we will be generating a table of values. We will be using loops
to generate rows and also columns, which will be nested within the rows.
Nested arrays can be used to represent rows in a table.
This is a common structure in spreadsheets, where each row is a nested array within
a table and the contents of these rows are the cells in the table.
The columns will align as we are creating an equal number of cells in each row.
    To create a table generator, first create an empty array, myTable, to hold your table data.
    Set variable values for the number of rows and columns.
    This will allow us to dynamically control how many rows and columns we want within the table.
    Separating the values from the main code helps make updates to the dimensions easier.
    Set up a counter variable with an initial value of 0.
    The counter will be used to set the content and count the values of the cells within the table.
    Create a for loop with conditions to set the number of iterations, and to construct each row of the table.
    Within it, set up a new temporary array (tempTable) to hold each row of data.
    The columns will be nested within the rows, generating each cell needed for the column.
    Nest a second loop within the first to count the columns.
    Columns are run within the row loop so that we have a uniform number of columns within the table.
    Increment the main counter each iteration of the inner loop, so that we track a master
    count of each one of the cells and how many cells are created.
    Push the counter values to the temporary array, tempTable.
    Since the array is a nested array representing a table, the values of the counter can also be used
    to illustrate the cell values next to each other in the table.
    Although these are separate arrays representing new rows, the value of the counter will help illustrate
    the overall sequence of cells in the final table.
    Push the temporary array to the main table. As each iteration builds a new row of array items,
    this will continue to build the main table in the array.
    Output into the console with console.table(myTable).
    This will show you a visual representation of the table structure.
*/

let myTable = [];
let rows = 5;
let columns = 5;
let counterValue = 0;

for(let i = 0; i < rows; i++) { //linhas;
    let tempTable = [];
    for(let j = 0; j < columns; j++) { //colunas;
        counterValue++;
        tempTable.push(counterValue); //a variavel counterValue mantem contando o numero de células criadas;
    }
    myTable.push(tempTable);
}
console.table(myTable); //console.table é uma representação visual que auxilia na visualização do formato table;


