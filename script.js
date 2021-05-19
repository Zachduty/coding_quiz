$(document).ready(function () {
  var correct = 0;
  var wrong = 0;
  var questionNum = 0;
  var maxTime = 60
  var timer 

  $("#start").on("click", function() {
    startTimer()
    displayQuestion()
  })

  function startTimer() {
      timer = setInterval(function () {
         maxTime --
         $("#timer").text("Timer : " + maxTime)
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
      var choiceBtn = $("<button>");
      choiceBtn.text(questions[questionNum].choices[i]);
      choiceBtn.attr("class", "choice");
      $("#putStuffHere").append(choiceBtn);
    }
  }

  $("#start").on("click", function() {
    console.log("working")
    //startTimer()
    displayQuestion()
  })


  $(document).on("click", ".choice",function () {
    if ($(this).text() === questions[questionNum].answer) {
      correct++;
    } else {
      wrong--;
      maxTime = maxTime -10
    }
    questionNum++

    if (questionNum >= 5) {
        gameOver();
        clearInterval(timer)

    } else { 
        displayQuestion()
    }


    console.log("Correct : ", correct);
    console.log("wrong : ", wrong);
    $("#correct").text("Correct : " + correct)
    $("#wrong").text("Wrong : " + wrong)

    console.log("Correct : ", correct);
    console.log("wrong : ", wrong);
    $("#correct").text("Correct : " + correct)
    $("#wrong").text("Wrong : " + wrong)

  });




  function gameOver() {

    var gameOverText = $("<h1>");
    var saveButton = $("<button>");
    var inputName = $("<input>")
    
    gameOverText.text("GAME OVER");
    gameOverText.addClass("gameOver")
    saveButton.text("INPUT NAME")
    saveButton.addClass("save")
    inputName.addClass("inputName")

    $("#putStuffHere").append(title);

    $("#putStuffHere").append(title);

    $("#putStuffHere").empty();
    $("#putStuffHere").text("GAME OVER");
    $("#putStuffHere").append(saveButton)
    $("#putStuffHere").append(inputName)
  }

  $(document).on("click", ".save", function() {
    localStorage.setItem ($(".inputName").val(), maxTime)
    window.location.replace("/highscore.html")
  })

});

