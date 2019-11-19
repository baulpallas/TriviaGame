var triviaData = [
  {
    id: 0,
    question:
      'They call him "Freak lips". He can hit the high c all night long.  He\'s known as King of the Tuk Tuk sound.',
    choices: [
      "Roy Donk",
      "Tiny Boop Sqig Shorterly",
      "Ernest Glucksman",
      "Bill Evans"
    ],
    answer: "Tiny Boop Sqig Shorterly",
    answerCode: 1
  },
  {
    id: 1,
    question:
      "Frequent guest on the Colgate Comedy Hour.  Did panels with Paul Julien and the guy who did the voice of the Road Runner (beep beep)",
    choices: ["Paul Bufano", "Roy Donk", "Ernest Glucksman", "Bill Evans"],
    answer: "Paul Bufano",
    answerCode: 0
  },
  {
    id: 2,
    question:
      "Ran with Thaddeus Phinx. Was one of the 8-balls in Mookie Cramer and the 8-balls. Played an alto sax with a kink in it",
    choices: [
      "Marcus the Worm Hicks",
      "Dizzy Gilespie",
      "Ernest Glucksman",
      "Bill Evans"
    ],
    answer: "Marcus the Worm Hicks",
    answerCode: 0
  },
  {
    id: 3,
    question: "What jazz soloist was known as Yarbird",
    choices: ["Thelonius Monk", "Bill Evans", "Charlie Parker", "Stan Getz"],
    answer: "Charlie Parker",
    answerCode: 2
  }
];
var userChoice;
var clockRunning = false;
var timeVariable;
var changeScreenTimeVariable;
var time = 20;
var correctGuesses = 0;

window.onload = function() {
  $(".startButton").on("click", startGame);
};
// start game function
function startGame() {
  console.log("did it work?");
  clockRunning = true;
  console.log(timeVariable);
  var html = triviaData[0];
  renderQuestionObj.renderQuestion(
    html.id,
    html.question,
    html.choices[0].split(" ").join("-"),
    html.choices[1].split(" ").join("-"),
    html.choices[2].split(" ").join("-"),
    html.choices[3].split(" ").join("-"),
    html.choices[0],
    html.choices[1],
    html.choices[2],
    html.choices[3]
  );
}

var renderQuestionObj = {
  renderQuestion: function(
    QID,
    question,
    ID0,
    ID1,
    ID2,
    ID3,
    choice0,
    choice1,
    choice2,
    choice3
  ) {
    $(".content").html(
      `<p id="question${QID}" class="question d-flex flex-column col-12">${question}</p> <div class="holder"><div class="choice col-12" id="${ID0}">${choice0}</div> <div class="choice col-12" id="${ID1}">${choice1}</div> <div class="choice col-12" id="${ID2}">${choice2}</div> <div class="choice col-12" id="${ID3}">${choice3}</div></div>`
    );
    this.newEventListener(0);
    var time = 20;
    var timeVariable;
    var stopClockText = `Time Remaining: ${time}`;
    $("#timer").text(stopClockText);
    timeVariable = setInterval(function() {
      time--;
      var textStopClock = `Time Remaining: ${time}`;
      $("#timer").text(textStopClock);
      console.log(time);
      if (time < 1) {
        clearInterval(time);
        renderQuestionObj.wrongAnswer();
      }
    }, 1000);
  },

  newEventListener: function(question) {
    $(".holder").on("click", ".choice", function() {
      userChoice = $(this).attr("id");
      if (userChoice === triviaData[question].answer.split(" ").join("-")) {
        renderQuestionObj.correctAnswer(triviaData[question].answer);

        // add function where we move to next screen
      } else {
        renderQuestionObj.wrongAnswer(triviaData[question].answer);
      }
    });
  },
  correctAnswer: function(answer) {
    $(".content").html(
      `<p>That's right! ${answer}! How about some gaspacho soup?</p>`
    );
    $(".startButton").text("Next Question!");
    $("#timer").text("");
    correctGuesses++;
    console.log(time);
    console.log(correctGuesses);
  },
  wrongAnswer: function(answer) {
    $(".content").html(
      `<p>PAUL BUFANO! COME ON! JEEZ! The correct answer was ${answer}!</p>`
    );
    $(".startButton").text("Next Question!");
  }
};
