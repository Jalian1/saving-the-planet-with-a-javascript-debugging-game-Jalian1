const prompt = require("prompt-sync")();

console.log('Welcome to the Climate Change Awareness Game!');

let score = 0;

/ Updated function to handle multiple correct answers and validate input
function decisionScenario(question, options, correctAnswerIndexes) {
    console.log(question);

    / Print all options correctly
    for (let i = 0; i < options.length; i++) {
        console.log(`${i + 1}. ${options[i]}`);
    }

    / Get player input and validate the input
    let playerAnswer;
    while (true) {
        playerAnswer = parseInt(prompt("Enter your choice (number):")) - 1;
        
        / Check for valid input
        if (playerAnswer >= 0 && playerAnswer < options.length) {
            break; / exit loop if the input is valid
        } else {
            console.log("Invalid choice. Please choose a valid option.");
        }
    }

    / Check if the player's answer matches any of the correct answers
    if (correctAnswerIndexes.includes(playerAnswer)) {
        console.log('Correct! You made an environment-friendly decision. +1 point.');
        score++;
    } else {
        console.log(`Incorrect! The better choice would be: ${options[correctAnswerIndexes[0]]}`);
    }
}

/ Scenario 1: Grocery bag choice
decisionScenario(
    'You are going to the supermarket. How do you choose to carry your groceries?',
    ['Plastic bags provided by the store', 'Bring your own reusable bags', 'Carry them without any bag'],
    [1] / The correct answer is bringing your own reusable bags
);

/ Scenario 2: Car choice
decisionScenario(
    '\nYou are buying a new car. Which type do you choose?',
    ['A gasoline-powered car', 'A hybrid car', 'An electric car'],
    [2] / The correct answer is an electric car
);

/ Scenario 3: Disposing of old electronics (first question)
decisionScenario(
    '\nYou want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center'],
    [2] / The correct answer is taking them to an e-waste recycling center
);

/ Scenario 4: Disposing of old electronics (alternative option)
decisionScenario(
    '\nYou want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center', 'Refurbish and continue using them'],
    [2, 3] / Both e-waste recycling and refurbishing are good options
);

/ Scenario 5: Meal choices
decisionScenario(
    '\nHow do you prefer to eat your meals?',
    ['Takeout from restaurants in disposable containers', 'Cooked at home with locally sourced ingredients', 'Processed and packaged meals', 'Home cooked meals with ingredients from your own garden'],
    [1, 3] / Both cooking at home with locally sourced ingredients and growing your own food are great choices
);

console.log(`\nGame Over! Your total score is: ${score}. Thank you for playing.\n`);
