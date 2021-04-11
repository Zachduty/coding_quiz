$(document).ready(function () {
  var correct = 0;
  var wrong = 0;
  var questionNum = 0;
  var maxTime = 60

  $("#start").on("click", function() {
    console.log("working")
    startTimer()
    displayQuestion()
  })

  function startTimer() {
     setInterval(function () {
         maxTime --
         $("#timer").text("Timer : " + maxTime)
         

        //  console.log('Timer ??? ticking down ??', maxTime)

     }, 1000)  
  }


  


  var questions = [
    {
      title: "commonly used data DOES NOT include?",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      title: "the condition in an if / else statement is enclose within ______",
      choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
      answer: "parenthesis",
    },
    {
      title: "arryays in javascript can be used to store _______",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above",
      ],
      answer: "all of the above",
    },
    {
      title: "string values must be enclosed within _____",
      choices: ["commas", "curly brackets", "quotes", "parenthesis"],
      answer: "parenthesis",
    },
    {
      title:
        "a very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["javascript", "terminal/bash", "for loops", "console log"],
      answer: "console log",
    },
  ];

  function displayQuestion() {
    $("#putStuffHere").empty();

    var title = $("<h1>");
    
    title.text(questions[questionNum].title);
    $("#putStuffHere").append(title);

    for (let i = 0; i < questions[questionNum].choices.length; i++) {
      console.log("looping ??", i);

      var choiceBtn = $("<button>");
      choiceBtn.text(questions[questionNum].choices[i]);
      choiceBtn.attr("class", "choice");
      $("#putStuffHere").append(choiceBtn);
    }
  }



  $(document).on("click", ".choice",function () {
    if ($(this).text() === questions[questionNum].answer) {
      correct++;
    } else {
      wrong++;
    }
    questionNum++

    if (questionNum >= 5) {
        gameOver()

    } else { 
        displayQuestion()
    }




    console.log("Correct : ", correct);
    console.log("wrong : ", wrong);
    $("#correct").text("Correct : " + correct)
    $("#wrong").text("Wrong : " + wrong)


  });


  function gameOver() {


    var gameOverText = $("<h1>");
    
    gameOverText.text("GAME OVER");
    gameOverText.addClass("gameOver")

    $("#putStuffHere").append(title);


    $("#putStuffHere").empty();
    $("#putStuffHere").text("GAME OVER");
  }

});
