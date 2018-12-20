// PseudoCode:
// WHEN the user clicks START button this starts timer - ON CLICK EVENT
// Timer starts and counts down from 45 seconds to answer all questions (time count down function)
// IF timer runs out - log loss => html to player - "you lost, click start to play again"
// click on answer => if correct selection turn green; else incorrect turn red
// total correct/incorrect after last question
// do percentage grade correct #/total # questions

let timeRemaining = 30;
let question;
let options;
let answer;
let questionCounter = 0;
let selections = [];
let quiz = $("#quiz");

$(document).ready(function() {
  $("#start").on("click", function() {
    let timerCount = setInterval(function() {
      $("#button").html("Time remaining: " + timeRemaining + "secs");
      timeRemaining--;
      clearFunction();
    }, 1000);
    let clearFunction = function() {
      if (timeRemaining === 0) {
        console.log("time's up");
        clearInterval(timerCount);
      }
    };
  });

  //var anInterval = setInterval(ALWAYS A Function, milliseconds between interval)

  let questionsList = {
    title1: {
      question: "World War I began in what year?",
      options: ["1917", "1914", "1938", "1923"],
      answer: 1
    },

    title2: {
      question: "John F. Kennedy was assisinated in what year?",
      options: ["New York", "Austin", "Dallas", "Miami"],
      answer: 2
    },

    title3: {
      question: "The Magna Carta was published by the King of Which counrty",
      options: ["France", "Austria", "Italy", "England"],
      answer: 3
    },

    title4: {
      question: "Who invented the first successful printing press?",
      options: [
        "Benjamin Franklin",
        "Sir Isaac Newton",
        "Martin Luther",
        "Johannes Gutenberg"
      ],
      answer: 3
    },

    title5: {
      question: "Who was the first Westerner to reach China?",
      options: ["Magellen", "Cook", "Marco Polo", "Sir Francis Drake"],
      answer: 2
    }
  };
  // console.log(questions);

  //  for (let i = 0; i < questions.length; i++) {
  //   questions[i].options;
  //     console.log(questions[i].options)
  //  }

  //button to trun green when the IF player clicks the correct answer.
  //create a variable that detects what button the player clicked.
  // Each button will hold a value. the value is the possible answer.
  // ex. 1st quesiton. 4 buttons, each button will hold its individual value.
  // if value of buttons == answer THEN change the button color to green.
  //else if value != answer THEN change color to red.

  $(".valbutton").on("click", function() {
    console.log($(this).attr("correct"));

    if ($(this).attr("correct") === "true") {
      //change color to green with jquery
      $(this).css("background-color", "green");
    } else {
      // change color to red.
      $(this).css("background-color", "red");
    }
  });
});
