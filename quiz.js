
const totalQ = 50; // maximum questions

// List of questions
var questionsMap = new Map(); 
// Map is like 2d array that stores key value pair key as its index and on each index(key) there is a value here(object thyat containes questions and correct aswers)


var quizSequence = [];
for(var i=1;i<=50;i++)
{
    quizSequence.push(i); // default sequence
}

// quiz stats are stored in this object  
var quizStats = {
	counter: 0, // total solved questions
	correct: 0, // your total correct answers
	wrong: 0, // your wrong answers
	
};	

// The questions are being stored in questionsMap
function quizQuestions() {
	questionsMap.set(1, {
		question: "Which season is most hot?",
		a: "Summer.",
		b: "Winter.",
		c: "Autum.",
		d: "All.",
		answer: "a",
	});
	questionsMap.set(2, {
		question: "What is the largest planet in our solar system?",
		a: "Mercury.",
		b: "Neptune.",
		c: "Saturn.",
		d: "Jupiter.",
		answer: "d",
	});
	questionsMap.set(3, {
		question: "What is result of 3*3?",
		a: "3",
		b: "9",
		c: "13",
		d: "55",
		answer: "b",
	});
	questionsMap.set(4, {
		question: "What is the name of creator/fouder of Pakistan?",
		a: "Quaid-e-Azam.",
		b: "Tugula Fall",
		c: "Imran Khan",
		d: "Allama Iqbal",
		answer: "a",
	});
	questionsMap.set(5, {
		question: "What is the chemical symbol for iron?",
		a: "Ir.",
		b: "Fe.",
		c: "On.",
		d: "IJzer.",
		answer: "b",
	});
	questionsMap.set(6, {
		question: "JAVASCRIPT is?",
		a: "program",
		b: "Scripting Language",
		c: "Programming language",
		d: "All",
		answer: "b",
	});
	questionsMap.set(7, {
		question: "What is the color of Pak flag?",
		a: "Red.",
		b: "Blue.",
		c: "Green.",
		d: "Yellow.",
		answer: "c",
	});
	questionsMap.set(8, {
		question: "Which input fiels type is correct?",
		a: "country.",
		b: "copy.",
		c: "mp3.",
		d: "text.",
		answer: "d",
	});
	questionsMap.set(9, {
		question: "Which is the Capital of Pakistan?",
		a: "Islamabad.",
		b: "Lahore.",
		c: "Karachi.",
		d: "New york.",
		answer: "a",
	});
	questionsMap.set(10, {
		question: "What do we use for javascript?",
		a: "<link> tag.",
		b: "<script> tag.",
		c: "<p> tag.",
		d: "<head> tag.",
		answer: "b",
	});
	questionsMap.set(11, {
		question: "JS <script> tag is placed in?",
		a: "head.",
		b: "body.",
		c: "head or body.",
		d: "no.",
		answer: "c",
	});
	questionsMap.set(12, {
		question: "css stands for?",
		a: "color ful shett.",
		b: "code style shet.",
		c: "csharp style sheet.",
		d: "cascading style sheet.",
		answer: "d",
	});
	questionsMap.set(13, {
		question: "The largest volcano ever discovered in our solar system is located on which planet?",
		a: "Jupiter.",
		b: "Earth.",
		c: "Venus.",
		d: "Mars.",
		answer: "d",
	});
	questionsMap.set(14, {
		question: "The sky is ?",
		a: "blue.",
		b: "yellow.",
		c: "pink.",
		d: "green.",
		answer: "a",
	});
	questionsMap.set(15, {
		question: "Joseph Smith was the founder of what religion?",
		a: "Scientology.",
		b: "Jehova's Witnesses.",
		c: "Latter Day Saints.",
		d: "Josephism.",
		answer: "c",
	});
	questionsMap.set(16, {
		question: "There is life on Mars?",
		a: "No.",
		b: "Yes.",
		c: "Both.",
		d: "All.",
		answer: "a",
	});
	questionsMap.set(17, {
		question: "Abbreviation of Hyper Tect Markup Language is?",
		a: "HTTP.",
		b: "HTML.",
		c: "Both.",
		d: "TNone.",
		answer: "b",
	});
	questionsMap.set(18, {
		question: "One kilobyte is equal to how many bytes?",
		a: "1000 bytes.",
		b: "1048 bytes.",
		c: "1001 bytes.",
		d: "1024 bytes.",
		answer: "d",
	});
	questionsMap.set(19, {
		question: "Number('1') - 1 == 0; what is the result?",
		a: "false.",
		b: "both.",
		c: "true.",
		d: "none.",
		answer: "c",
	});
	questionsMap.set(20, {
		question: ". Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
		a: "alertbox(“GeeksforGeeks”)",
		b: "msg(“GeeksforGeeks”)",
		c: "alert(“GeeksforGeeks”)",
		d: "printf(“GeeksforGeeks”)",
		answer: "c",
	});
	questionsMap.set(21, {
		question: "What is the only sea on Earth with no coastline?",
		a: "The Sargasso Sea.",
		b: "The North Sea.",
		c: "The Scotia Sea.",
		d: "The Black Sea.",
		answer: "a",
	});
	questionsMap.set(22, {
		question: "What city connects two continents?",
		a: "Montreal.",
		b: "Brussels.",
		c: "Istanbul.",
		d: "Damascus.",
		answer: "c",
	});
	questionsMap.set(23, {
		question: "What is the correct syntax for referring to an external script called “geek.js”?",
		a: "<script href=”geek.js”>",
		b: "<script src=”geek.js”>",
		c: "<script ref=”geek.js”>",
		d: "<script name=”geek.js”>",
		answer: "b",
	});
	questionsMap.set(24, {
		question: "In what month is the Earth closest to the sun?",
		a: "June.",
		b: "January.",
		c: "March.",
		d: "September.",
		answer: "b",
	});
	questionsMap.set(25, {
		question: "Which country and it's territories cover the most time zones?",
		a: "Russia.",
		b: "England.",
		c: "United States.",
		d: "France.",
		answer: "d",
	});
	questionsMap.set(26, {
		question: "Which of the following is not a reserved word in JavaScript?",
		a: " program",
		b: "throws",
		c: "interface",
		d: "short",
		answer: "a",
	});
	questionsMap.set(27, {
		question: "How is the function called in JavaScript?",
		a: "call Geekfunc()",
		b: "Geekfunc()",
		c: " call function Geekfunc()",
		d: " function Geekfunc()",
		answer: "b",
	});
	questionsMap.set(28, {
		question: " How to write an ‘if’ statement for executing some code. If “i” is NOT equal to 8?",
		a: "if(i<>5)",
		b: " if i<>5",
		c: "if(i!=5)",
		d: "if i!=5",
		answer: "c",
	});
	questionsMap.set(29, {
		question: "How old must a person be to run for President of the United States?",
		a: "18.",
		b: "23.",
		c: "35.",
		d: "42.",
		answer: "c",
	});
	questionsMap.set(30, {
		question: " What is the correct syntax for adding comments in JavaScript?",
		a: " <!–This is a comment–!",
		b: " –This is a comment",
		c: "** –This is a comment**",
		d: " //This is a comment",
		answer: "d",
	});
	questionsMap.set(31, {
		question: "New York City was originally known by which Dutch name?",
		a: "Nieuw Rotterdam.",
		b: "Haarlem.",
		c: "Breukelen.",
		d: "Nieuw Amsterdam.",
		answer: "d",
	});
	questionsMap.set(32, {
		question: "What is the JavaScript syntax for printing values in Console?",
		a: "print()",
		b: "console()",
		c: "console.print()",
		d: "console.log()",
		answer: "d",
	});
	questionsMap.set(33, {
		question: "What does the french phrase, 'merci' mean in English?",
		a: "Thank you.",
		b: "Have a nice day.",
		c: "Goodbye.",
		d: "Nice to meet you.",
		answer: "a",
	});
	questionsMap.set(34, {
		question: "What vitamin is produced when a person is exposed to sunlight?",
		a: "Vitamin A.",
		b: "Vitamin B.",
		c: "Vitamin C.",
		d: "Vitamin D.",
		answer: "d",
	});
	questionsMap.set(35, {
		question: "What does oranges contain?",
		a: "vitamin c",
		b: "protien",
		c: "vitamin D",
		d: "Both a and d",
		answer: "d",
	});
	questionsMap.set(36, {
		question: "What layer of the atmosphere lies between the troposphere and mesosphere?",
		a: "Heliosphere.",
		b: "Thermosphere.",
		c: "Stratosphere.",
		d: "Innersphere.",
		answer: "c",
	});
	questionsMap.set(37, {
		question: "Which tag is inline?",
		a: "<p>",
		b: "<img>",
		c: "<div>",
		d: "<h1>",
		answer: "b",
	});
	questionsMap.set(38, {
		question: "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
		a: "Stripped()",
		b: "trim()",
		c: "trimmed()",
		d: "remove()",
		answer: "b",
	});
	questionsMap.set(39, {
		question: "Which one is the city of Australia?",
		a: "Lahore",
		b: "Istanbul",
		c: "Syndney",
		d: "Antartika",
		answer: "c",
	});
	questionsMap.set(40, {
		question: "Which one is programming language?",
		a: "js",
		b: "CSS",
		c: "C++",
		d: "HTML",
		answer: "c",
	});
	questionsMap.set(41, {
		question: "The Southern Ocean surrounds which continent?",
		a: "Australia.",
		b: "South-America.",
		c: "Europe.",
		d: "Antarctica.",
		answer: "d",
	});
	questionsMap.set(42, {
		question: "Which method in js is used to check datatypes?",
		a: "type()",
		b: "instanceOf()",
		c: "typeOf()",
		d: "None",
		answer: "c",
	});
	questionsMap.set(43, {
		question: "What language do they speak in Turkey?",
		a: "Spanish.",
		b: "Turkish.",
		c: "English.",
		d: "None.",
		answer: "b",
	});
	questionsMap.set(44, {
		question: "Which city has the largest population in the world?",
		a: "New York, United States.",
		b: "Beijing, China.",
		c: "Mexico City, Mexico.",
		d: "Tokyo, Japan.",
		answer: "d",
	});
	questionsMap.set(45, {
		question: "Which of the following is an advantage of using JavaScript?",
		a: "Increased interactivity.",
		b: "Less server interaction.",
		c: "Immediate feedback.",
		d: "All of above.",
		answer: "d",
	});
	questionsMap.set(46, {
		question: " Which was the first browser to support JavaScript?",
		a: " Mozilla Firefox",
		b: "Netscape",
		c: "Google Chrome",
		d: "IE",
		answer: "a",
	});
	questionsMap.set(47, {
		question: "Which function of an Array object calls a function for each element in the array in JS?",
		a: "forEach()",
		b: "forEvery()",
		c: "each()",
		d: "None",
		answer: "a",
	});
	questionsMap.set(48, {
		question: "JavaScript is a ________ Side Scripting Language.?",
		a: "Server",
		b: "Browser",
		c: "ISP",
		d: "None",
		answer: "b",
	});
	questionsMap.set(49, {
		question: "In what year was the first Apple computer released?",
		a: "1981.",
		b: "1972.",
		c: "1976.",
		d: "1989.",
		answer: "c",
	});
	questionsMap.set(50, {
		question: "The companies HP, Microsoft and Apple were all started in a what?",
		a: "Bedroom.",
		b: "Garage.",
		c: "Attic.",
		d: "Bathroom.",
		answer: "b",
	});
	
}

function determineSequence() {
   
	// Shuffle an array ( sequence in which questions will apear)
	function shuffle(array) {
        // array contains numbers

		var currentIndex = array.length;
		var temp;
		var randomIndex;
        
        // until length(currentIndex reduces to 0)
		while (currentIndex !== 0) {

			// randomize
			randomIndex = Math.floor(Math.random() * currentIndex); // 0 to currentIndex
			currentIndex--;

			// swap currentIndex value with randomIndex value with the current element.
			temp = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temp;
		}
		return array;
		
	}
	
	
	quizSequence = shuffle(quizSequence); // contains question numbers 
}


var questionContainer = document.getElementById("the-question");
var optionA = document.getElementById("first-option");
var optionB = document.getElementById("second-option");
var optionC = document.getElementById("third-option");
var optionD = document.getElementById("fourth-option");
var score = document.getElementById("score-counter");
var qKey=0;
// PRINT
function printQuestion() {
	// Up the counter (how many questions you have solved)
	quizStats.counter++;
	var progress = document.getElementById('progress');
    progress.textContent = `${quizStats.counter} / ${totalQ}`;
	 qKey = quizSequence.shift(); // gives next question number as shift gets value from smallest index in array
    
    // here qKey(current question number) is used as key to get corresponding object(question statement and answers)
	var a = questionsMap.get(qKey).a; // option a
    var b = questionsMap.get(qKey).b; // option b
	var c = questionsMap.get(qKey).c; // option c
	var	d = questionsMap.get(qKey).d; // option d
	var	question = questionsMap.get(qKey).question; // question statement
	
	questionContainer.textContent = question;
	optionA.textContent = a;
	optionB.textContent = b;
	optionC.textContent = c;
	optionD.textContent = d;
	
}

function addDataAttributes() {
	optionA.setAttribute("data-answer", ( "a" ));
	optionB.setAttribute("data-answer", ( "b" ));
	optionC.setAttribute("data-answer", ( "c" ));
	optionD.setAttribute("data-answer", ( "d" ));
}

// which option is selected by the user (whixh option is clicked)

function addEventListeners() {
	optionA.addEventListener("click", checkTheAnswer);
	optionB.addEventListener("click", checkTheAnswer);
	optionC.addEventListener("click", checkTheAnswer);
	optionD.addEventListener("click", checkTheAnswer);
}

function checkTheAnswer() {
	
	var givenAnswer = this.dataset.answer; // here this refers to the option which is selected(clicked) by user and dataset.answer contains that option(being set in data-answer) 
    var correctAnswer = questionsMap.get(qKey).answer; // get the correct answer corresponding to qKey(key of current question) 
	
	if (givenAnswer === correctAnswer) {
		quizStats.correct++;
		this.classList.add("correct");
	}
	else {
		quizStats.wrong++;
		this.classList.add("wrong");
	}
	
    score.textContent = quizStats.correct;
    
	// if there are still some questions remaining and this current question was not last one
	if ( quizStats.counter < totalQ) {
		setTimeout(removeClass,1500); // setTimeout is used to keep /view the effect for some time 
		setTimeout(printQuestion,1500);
	}
	// & If it was last question then show final results
	else{
		finalResult();
	}
}

function removeClass() {
	optionA.classList.remove("correct");optionA.classList.remove("wrong");
	optionB.classList.remove("correct");optionB.classList.remove("wrong");
	optionC.classList.remove("correct");optionC.classList.remove("wrong");
	optionD.classList.remove("correct");optionD.classList.remove("wrong");
}

function finalResult() {
	
	var numCorrect = document.getElementById("num-correct");
    var	numTotal = document.getElementById("num-total");
    
	// show /print result
	
	numCorrect.textContent = quizStats.correct;
	numTotal.textContent = totalQ;
	
	document.getElementsByClassName("results-container")[0].classList.add("display");
}
var start = document.getElementsByClassName('startAgain')[0];
start.onclick = function(){
    location.reload();
} 

	quizQuestions();
	determineSequence();
	printQuestion();
	addEventListeners();
	addDataAttributes();


