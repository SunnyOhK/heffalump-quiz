//   {
//         question: "Which of the following is a function of the elephant's trunk?",
//         answers: {
//             a: "To suck up water for drinking and cooling",
//             b: "To use as a snorkel",
//             c: "To grab items that are too large to inhale",
//             d: "To communicate (trumpet warnings and greet one another)",
//             e: "All are true",
//         },
//         correctAnswer: "e"
//     },
//     {
//         question: "On which continent is the elephant not native/ found in the wild?",
//         answers: {
//             a: "South America",
//             b: "Africa",
//             c: "Asia",
//             d: "Elephants are native to all 3 continents",
//             e: "Elephants are not native to any of these continents",
//         },
//         correctAnswer: "a"
//     },
    // {
    //     question: "Which of the following is the largest living elephant species?",
    //     answers: {
    //         a: "Asian",
    //         b: "African Savanna",
    //         c: "African Forest",
    //         d: "Woolly Mammoth",
    //         e: "Mr. Snuffleupagus",
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "How much does a baby elephant normally weigh at birth?",
    //     answers: {
    //         a: "100 - 150 lbs",
    //         b: "200 - 250 lbs",
    //         c: "300 - 350 lbs",
    //         d: "400 - 500 lbs",
    //         e: "up to 800 lbs depending on the species",
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "Which of the following poses the greatest threat to elephants' survival?",
    //     answers: {
    //         a: "Large feline predators (ex. lions)",
    //         b: "Declining birth rates",
    //         c: "Humans (poaching and habitat destruction)",
    //         d: "Mudslides",
    //         e: "Elephant populations are not declining",
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     question: "Which of the following is a common (true) claim about elephants?",
    //     answers: {
    //         a: "Elephants are afraid of mice",
    //         b: "Elephants have the sharpest eyesight in the animal kingdom",
    //         c: "Elephants love performing in the circus",
    //         d: "An elephant a day keeps the doctor away",
    //         e: "An elephant never forgets",
    //     },
    //     correctAnswer: "e"
    // },


USE THIS: 
    // Immediately hide the clear button
    clearEl.hide();

// Create button
var letterBtn = $('<button>');
// Assign style to the button
letterBtn.addClass('letter-button btn btn-info');
// Assign the letter to the data-letter attribute
letterBtn.attr('data-letter', letters[i]);

// answers populate on buttons, .forEach loop
currentQuestion.answers.forEach(function (answer, i) {
    var answerButton = document.createElement("button");
    answerButton.setAttribute("class", "answer");
    answerButton.setAttribute("value", answer);
    // i+1 to show numbers 1-4 since array starts at 0.
    answerButton.textContent = i + 1 + ". " + answer;

    // answers and events for answers
    answerButton.onclick = chooseAnswer;
    answersEl.appendChild(answerButton);
    
// FROM THE CLASS CHAT
    // answers and events for answers
    answerButton.onclick = chooseAnswer;
    answersEl.appendChild(answerButton);

    // clear old stuff
    answersEl.textContent = "";
    // clearout at the beginning of my getQuestion function