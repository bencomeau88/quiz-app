var Quiz = function(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
};

Quiz.prototype.currentQuestion = function() {
    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.answer = function(answer) {
    // compare the answer to current question right answer
    var question = this.currentQuestion();
    if (answer === question.answer) {
        this.score++;
    } // else { this.correct(); }
}


Quiz.prototype.showScore = function() {
    var $message = $('.score .message');
    if (this.score >= 4) {
     $message.text('You rock!').addClass('winner'); } 
 else if (this.score >= 2) 
    { $message.text('You are meh!').addClass('mudblood'); }
  else 
    { $message.text('You suck!').addClass('muggle'); }
    $('.score').show();
    $('.message').show();
}

Quiz.prototype.next = function() {
    this.currentQuestionIndex++;
    // if last question, do other thing.
    if (this.currentQuestionIndex >= this.questions.length) {
        this.showScore();
        $('.quiz').hide();
    } else {
        this.displayQuestion();
    }
}

Quiz.prototype.displayQuestion = function() {
    // Clear the questions html
    $('#questions').empty();

    // Building the question element
    var question = this.currentQuestion();
    var questionElement = $('<div class="question"></div>');
    questionElement.append('<h2>' + question.question + '</h2>');

    question.choices.forEach(function(choice) {
        var choiceElement = $('<p class="choice"></p>');
        choiceElement.append('<input type="radio" name="choice" value="' + choice + '">');
        choiceElement.append(choice);
        questionElement.append(choiceElement);
    })

    // Append the question element to the DOM
    $('#questions').append(questionElement);
};

var HPQuiz = new Quiz([{
    question: "What house does Harry Potter belong to?",
    choices: ["Slitherin ", " Hufflepuff ", "Griffindor", " Ravenclaw"],
    answer: "Griffindor"
}, {
    question: "What is the Core of HP's Wand Made From?",
    choices: ["Dragon Heartstring", "Unicorn Tail Hair", "Phoenix Feather", "Troll Whisker"],
    answer: "Phoenix Feather"
}, {
    question: "What is Albus Dumbledore's Full Name?",
    choices: ["Albus Dumbledore", "Albus Percival Wilfric Brian Dumbledore", "Albus Percival Wilfric Dumbledore", "Albus Severus Wilfric Brian Dumbledore"],
    answer: "Albus Percival Wilfric Brian Dumbledore"
}, {
    question: "What Dragon Does Victor Krum Battle?",
    choices: ["Norwegian Ridgeback", "Hungarian Horntail", "Welsh Green", "Chinese Firebolt"],
    answer: "Chinese Firebolt"
}]);

$(document).ready(function() {
    HPQuiz.displayQuestion();
    $('#submit').click(function(e) {
        e.preventDefault();
        var answer = $('input[name="choice"]:checked').val();
        HPQuiz.answer(answer);
        HPQuiz.next();
        // HPQuiz.showScore();
    });
    $('#start').on('click', function() {
        $('.quiz').show();
        $('.new').show();
        $('.quizTime').hide();
    });
})

// score section 

// $(document).ready(function(){
//   var $message = $('.score .message');
//   if (score >= 4) { $message.text('You rock!').addClass('winner'); }
//   else if (score >= 2) { $message.text('You are meh!').addClass('mudblood'); }
//   else { $message.text('You suck!').addClass('muggle'); }
// });
