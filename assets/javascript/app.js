var triviaData = [
  {
    id: 0,
    question:
      'They call him "Freak lips". He can hit the High C all night long! He\'s also known as King of the Tuk Tuk sound.',
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
var timeVariable;
var time = 20;
var correctGuesses = 0;
var incorrectGuesses = 0;
var triviaStatus = 0;

window.onload = function() {
  $(".startButton").on("click", startGame);
};

// start game function
function startGame() {
  renderQuestionObj.renderQuestion(triviaStatus);
}

var renderQuestionObj = {
  renderQuestion: function(questionNum) {
    $(".paulBufano").remove();
    $(".startButton").remove();
    $(".content").html(
      `<p id="question${triviaData[questionNum].id}" class="question d-flex flex-column col-12">${triviaData[questionNum].question}</p> <div class="holder"></div>`
    );
    for (var i = 0; i < triviaData.length; i++) {
      $(".holder")[0].innerHTML += `<p class="choice col-12" id="${triviaData[
        questionNum
      ].choices[i]
        .split(" ")
        .join("-")}">${triviaData[questionNum].choices[i]}</p>`;
    }
    this.newEventListener(triviaStatus);
    var time = 20;
    var stopClockText = `Time Remaining: ${time}`;
    $("#timer").text(stopClockText);
    timeVariable = setInterval(function() {
      time--;
      var textStopClock = `Time Remaining: ${time}`;
      $("#timer").text(textStopClock);
      if (time < 1) {
        clearInterval(timeVariable);
        renderQuestionObj.outOfTime();
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
        time;
        renderQuestionObj.wrongAnswer(triviaData[question].answer);
      }
    });
  },
  correctAnswer: function(answer) {
    clearInterval(timeVariable);
    triviaStatus++;
    correctGuesses++;
    $(".content").html(
      `<p>That's right! ${answer}! I see you've been watching Colgate Comedy Hour.  How about some gaspacho soup?</p><img src="assets/images/colgate.jpg" id="colgate">`
    );
    $("#timer").text("");
    if (triviaStatus !== triviaData.length) {
      setTimeout(function() {
        renderQuestionObj.renderQuestion(triviaStatus);
      }, 5000);
    } else if (triviaStatus === triviaData.length) {
      setTimeout(function() {
        renderQuestionObj.gameOver();
      }, 3000);
    }
  },
  wrongAnswer: function(answer) {
    clearInterval(timeVariable);
    triviaStatus++;
    incorrectGuesses++;
    $(".content").html(
      `<p>It's ${answer}! COME ON! GEEZ! Your record collection must be very meat and potatoes...</p><img src="assets/images/donk.jpg" id="royDonk">`
    );
    $("#timer").text("");
    if (triviaStatus !== triviaData.length) {
      setTimeout(function() {
        renderQuestionObj.renderQuestion(triviaStatus);
      }, 5000);
    } else if (triviaStatus === triviaData.length) {
      setTimeout(function() {
        renderQuestionObj.gameOver();
      }, 3000);
    }
  },
  outOfTime: function() {
    clearInterval(timeVariable);
    triviaStatus++;
    incorrectGuesses++;
    $(".content").html(
      `<p>Out of Time. COME ON! GEEZ! Your record collection must be very meat and potatoes...</p><img src="assets/images/donk.jpg" id="royDonk">`
    );
    $("#timer").text("");
    if (triviaStatus !== triviaData.length) {
      setTimeout(function() {
        renderQuestionObj.renderQuestion(triviaStatus);
      }, 5000);
    } else if (triviaStatus === triviaData.length) {
      setTimeout(function() {
        renderQuestionObj.gameOver();
      }, 3000);
    }
  },
  gameOver: function() {
    triviaStatus = 0;
    $(".content").html(
      `<p>You hit ${correctGuesses} high C's but flubbed ${incorrectGuesses} household names.  Play again? Grab your horn and press the button below!</p><img src="assets/images/donk.jpg" id="royDonk">`
    );
    $(".buttonContainer").html(`<button type="button" class="startButton">
    Click to Play Again!
  </button>`);
    $(".buttonContainer").on("click", ".startButton", function() {
      $(".content").html("");
      correctGuesses = 0;
      incorrectGuesses = 0;
      renderQuestionObj.renderQuestion(triviaStatus);
    });
  }
};
