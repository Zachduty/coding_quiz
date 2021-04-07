$(document).ready(function() {

    var correct = 0
    var wrong = 0

    var questions = [
        {
            title: 'commonly used data DOES NOT include?',
            choices: ['strings', 'booleans', 'alerts', 'numbers'],
            answer: 'alerts'
        }, 
        {
            title: 'the condition in an if / else statement is enclose within ______',
            choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
            answer: 'parenthesis'
        }, 
        {
            title: 'arryays in javascript can be used to store _______',
            choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
            answer: 'all of the above'
        },
        {
            title: 'string values must be enclosed within _____',
            choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
            answer: 'parenthesis'
        },
        {
            title: 'a very useful tool used during development and debugging for printing content to the debugger is:',
            choices: ['javascript', 'terminal/bash', 'for loops', 'console log'],
            answer: 'console log'
        }
       
    ]

    var title = $('<h1>');
 
    title.text(questions[0].title);
    $('#putStuffHere').append(title);

    for (let i = 0; i < questions[0].choices.length; i++) {
        console.log('looping ??', i)

        var choiceBtn = $('<button>')
        choiceBtn.text(questions[0].choices[i])
        choiceBtn.attr('class', 'choice')
        $('#putStuffHere').append(choiceBtn);  
    }


    $('.choice').on('click', function(){
        


        if($(this).text() === questions[0].answer){
            correct++
        } else {
            wrong++
        }

        console.log('Correct : ', correct)
        console.log('wrong : ', wrong)

    })


     
  



  
    
 


    // $('#title').text('I CHANGED THIS WW JQUERY');

















})