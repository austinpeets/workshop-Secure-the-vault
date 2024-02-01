/*
1. Before anything else, write the pseudocode of your steps and how you will solve this exercise.

2. Create a string for the user saying: You have received this message because you have been chosen to open an important vault.
    Here is the secret combination:

3. Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator. Each must equal one of the three codes in the combination.

4. Add comments throughout the code to explain each step in the process.

5. Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.

*/

// Create equations with a button that gives you an answer.

// Create a prompt for the user to enter the combination from memory in order.

// Create an alert that informs you if the combination is correct or not.

// functions that interact with the onclick in html

function alertFunction(){
    alert("You have received this message because you have been chosen to open an important vault. Here is the secret combination:")
}

function functionOne() {
    alert("10");
}

function functionTwo() {
    alert("40")
}

function functionThree() {
    alert("39")
}

//Prompt function where you type in the answer and lets you know if its wrong or not

function functionFour() {
    const input = prompt("Enter the correct combo seperated by dashes")
    const combo = "10-40-39"
    if (input == combo){
        alert("This is the correct combo!")
    } else {
        alert("This is not the correct combo")
    }
}
