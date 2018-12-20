
// PseudoCode:
// 1. Build container
// 2. decide on layout - 1 container; 2 halves of the page ; 4 rows - question, answer, answer, right/wrong feedback
// 3. each question will have 4 multiple choice answers
// 4.START button will start game
// 4. Timer set to 30 seconds to answer all questions
// 5. click on correct answer => correct will play audio (bell)
// 6. if incorrect answer => moves to next question (play audio buzzer)
// 7. total correct/incorrect after last question
// 8. do percentage grade correct/total # of <i class
let timeReamining = 30;
$(document).ready(function() {
  $("#start").on("click", function() {
    let timerCount = setInterval(function()  ) {
      $("#button").html("Time remaining: " + "00:" + timeReamining + "secs");
    }, 1000);
    {
      //timerCount.start();
    }
  });
});
//var anInterval = setInterval(ALWAYS A Function, miliseconds between interval)

let questions = [
  {
    question: "World War I began in what year?",
    options: ["1917", "1914", "1938", "1923"],
    answer: 1
  },

  {
    question: "John F. Kennedy was assisinated in what year?",
    options: ["New York", "Austin", "Dallas", "Miami"],
    answer: 2
  },

  {
    question: "The Magna Carta was published by the King of Which counrty",
    options: ["France", "Austria", "Italy", "England"],
    answer: 3
  },

  {
    question: "Who invented the first successful printing press?",
    options: [
      "Benjamin Franklin",
      "Sir Isaac Newton",
      "Martin Luther",
      "Johannes Gutenberg"
    ],
    answer: 3
  },

  {
    question: "Who was the first Westerner to reach China?",
    options: ["Magellen", "Cook", "Marco Polo", "Sir Francis Drake"],
    answer: 2
  }
];

// console.log(questions);

for (let i = 0; i < questions.length; i++) {
  questions[i].answer;
  //console.log(questions[i].options)
}

let timerCount = 30;
// let start = document.querySelector("#start");

//   for (let timerCount = 0; timerCount <= 30; timerCount++) {

//   }

//  let twentySecTimer = setInterval(function() {
// twentySecTimer--;
// console.log("twentySecTimer" , twentySecTimer);

// function  timer () {
// $("#start").on("click", function(){

// });

//clear interval code here
// let nextQuestion = 0;

// $(".btn-primary").on("click", function(){

// event delegation
//$("p").on("click", function() {});



