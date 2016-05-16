// use a constructor instead example function quiz (question,choices,answer){};
// do these go after the $(doc).ready? or before?



$(document).ready(function() {
var score = 0;


    var quiz = [{
            // with a constructor use this.question, 
            question: "What house did Harry Potter belong to?",
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
        }


    ];

// how do I not use the last question that I used
// var random = quiz[Math.floor(Math.random()*4)];
// console.log(random);
// var currentQuiz = quiz[random];
// // console.log(currentQuiz);
// currentQuiz = random;
var tracker = [];
var currentQuestion = 0;
var currentQuiz = quiz[currentQuestion];
runQuiz(currentQuiz);

    function runQuiz(currentQuiz) {
        $('.questions').append('<p>' + currentQuiz.question)
        for (i = 0; i < currentQuiz.choices.length; i++) {
            $('.answers').append('<li>' + '<input type="radio" name="aToD" value="' + currentQuiz.choices[i] + '">' + currentQuiz.choices[i] + '</li>');
            $('.answers').css('listStyleType', 'none');
        }
        $('#submit').on('click', function(e) {
            e.preventDefault();
            console.log($("input[name='aToD']:checked").val());
        if ($("input[name='aToD']:checked").val() === currentQuiz.answer) {
            console.log('you got it right!')
            score++;
            // runNext();
        } else {
            console.log('WRONG!');
        }
        currentQuestion++;
        console.log(currentQuestion)
        runQuiz(currentQuiz);
        // runNext();
   
    });
     };
   // function runNext(){
   //      if (currentQuestion==0){
   //      	runQuiz(currentQuiz[0]);
   //      }
   //      else if (currentQuestion==1){
   //      	runQuiz(currentQuiz[1]);
   //      }
   //      else if (currentQuestion==2){
   //      	runQuiz(currentQuiz[2]);
   //      }
   //      else if (currentQuestion==3) {
   //      	runQuiz(currentQuiz[3])
   //      }
   //      else {
   //      	console.log('tomatoes');
   //      	// runScoreSheet();
   //      }
   //  };



$('#new').on('click', function() {
        location.reload(true);
    });

});
 



// function quiz(question,choices,answer){
// 	this.question=question;
// 	this.choices=choices;
// 	this.answer=answer;
// 	}

// 		// var answer = document.getElementsByClassName('answers').value;
// 		var answer= ($("input[name='aToD']:checked").val());
// 		console.log(answer);
// 		// I need to insert a if statement or somthing to check to see if the .val() is the right answer
// 		currentQuestion++;

// 		if (currentQuestion===1){
// 			runQuiz(quiz2);

// 		}
// 		else if(currentQuestion===2){
// 			runQuiz(quiz3)
// 		}
// 		else {
// 			runQuiz(quiz4)
// 		};
// 		//does the if statement work here, or should I use one that is conditional, or...
// 		// while(currentQuestion=false or true?? then move on to the next question)
// 	});
// 	// don't have to make a new object for each quiz ***see example below make 1 array of objects
// 	//create an object with an array
// 	// ar users = [{name: ’Joe’, age: 41}, {name: ’Alaine’, age: 35}, {name: ’Muhammad’, age: 25}, {name: ’Christopher’, age: 55}];
// 	// quiz[i] write a for loop that goes through your object everytime your user submits 

// 	// var quiz1 = new quiz("What house did Harry Potter belong to?", ["Slitherin ", " Hufflepuff ", " Griffindor ", " Ravenclaw"], "Griffindor");
// 	// var quiz2 = new quiz("What is the Core of HP's Wand Made From?", ["Dragon Heartstring", "Unicorn Tail Hair", "Phoenix Feather", "Troll Whisker"], "Phoenix Feather");
// 	// var quiz3 = new quiz("What is Albus Dumbledore's Full Name?", ["Albus Dumbledore", "Albus Percival Wilfric Brian Dumbledore", "Albus Percival Wilfric Dumbledore", "Albus Severus Wilfric Brian Dumbledore"], "Albus Percival Wilfric Brian Dumbledore");
// 	// var quiz4 = new quiz("What Dragon Does Victor Krum Battle?", ["Norwegian Ridgeback", "Hungarian Horntail", "Welsh Green", "Chinese Firebolt"], "Chinese Firebolt");

// 	// should I be building this using a constructor so I can add a method...
// 	// ..that changes the currentQuiz when the currentQuestion is incremented,but how?
// 	var allQuizzes=[{quiz1},{quiz2},{quiz3},{quiz4}]; 

// 	function runQuiz(currentQuiz){
// 		 $('.questions').append('<p>' + currentQuiz.question)
// 		 $('.answers').append('<input type="radio" name="aToD"' + "<br>" + currentQuiz.choices[0] + "<br>" + '<input type="radio" name="aToD"' + "<br>" + currentQuiz.choices[1] + "<br>" + '<input type="radio" name="aToD"' + "<br>" + currentQuiz.choices[2] + "<br>" + '<input type="radio" name="aToD"' + "<br>" + currentQuiz.choices[3])
// 	}
// 	runQuiz(quiz1);

// 	$('.questions').css({
// 		"fontSize":"30px",
// 		"color":"black"
// 	});
// 	$('.answers').css({
// 		"fontSize":"15px",
// 		"color":"black",
// 		"display":"inlineBlock"
// 	});

// 	function checkAnswer(answer){
// 		var userAnswer = document.getElementsByClassName("answers");
// 		console.log($("input[name='aToD']:checked").val());
// 		if(userAnswer = $("input[name='aToD']:checked").val()){
// 			score++;
// 			$('.youChoose').append("<p> CORRECT! You choose......wisely </p>");
// 		}
// 		else {
// 			$('.youChoose').append("<p> WRONG! You choose......poorly </p>");
// 		}
// 	};
