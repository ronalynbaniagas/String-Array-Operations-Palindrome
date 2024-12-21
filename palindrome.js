const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Check and log results for both words
function checkPalindrome(word) {
    let reversed = reverseString(word);
    console.log(`Original String: ${word}`);
    console.log(`Reversed String: ${reversed}`);
    console.log(`Is it a palindrome? ${word === reversed}`);
}

// Prompt the user for two words
rl.question("Enter the first word: ", (word1) => {
    rl.question("Enter the second word: ", (word2) => {
        checkPalindrome(word1);
        checkPalindrome(word2);
        rl.close(); // Close the readline interface
    });
});