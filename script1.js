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
       
    ]



    console.log('Good to go !!')
    //1 make html !
    var title = $('<h1>');
 

    //2 Dress it up how u like!! class names ids text ect...
    title.text(questions[0].title);
    $('#putStuffHere').append(title);
      //3 Check thathtml onto the page!!



    for (let i = 0; i < questions[0].choices.length; i++) {
        console.log('looping ??', i)

        var choiceBtn = $('<button>')
        choiceBtn.text(questions[0].choices[i])
        choiceBtn.attr('class', 'choice')
        $('#putStuffHere').append(choiceBtn);  
    }



    $('.choice').on('click', function(){
        // console.log('U got clicked!!! btn u clicked!!', $(this).text())
        // console.log('This is answer',questions[0].answer)


        if($(this).text() === questions[0].answer){
            // console.log('U got it right')
            correct++
        } else {
            // console.log(' U r wrong!!')
            wrong++
        }

        console.log('Correct : ', correct)
        console.log('wrong : ', wrong)

    })
  



  
    
 


    // $('#title').text('I CHANGED THIS WW JQUERY');















    // var setTimer = setInterval
    // (function){
    //     alert ("working");
    //     // display ()
    //     timer--;
    //     document.querySelector
//     //     ("span").textContent = timer;
//     // }
//  }
