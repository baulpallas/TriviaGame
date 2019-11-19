var triviaData = [
  {
    id: 0,
    question:
      'They call him "Freak lips". Can hit the high c all night long.  King of the Tuk Tuk sound.',
    choices: [
      "Roy Donk",
      "Tiny Boop Sqig Shorterly",
      "Ernest Glucksman",
      "Bill Evans"
    ],
    answer: "Tiny Boop Sqig Shorterly"
  },
  {
    id: 1,
    question:
      "Frequent guest on the Colgate Comedy Hour.  Did panels with Paul Julien and the guy who did the voice of the Road Runner (beep beep)",
    choices: ["Paul Bufano", "Roy Donk", "Ernest Glucksman", "Bill Evans"],
    answer: "Paul Bufano"
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
    answer: "Marcus the Worm Hicks"
  },
  {
    id: 3,
    question: "What jazz soloist was known as Yarbird",
    choices: ["Thelonius Monk", "Bill Evans", "Charlie Parker", "Stan Getz"],
    answer: "Charlie Parker"
  }
];

var clockRunning = false;
var timeVariable;
var time = 20;

window.onload = function() {
  $(".startButton").on("click", startGame);
  // $("#optionA").on("click", stop);
  // $("#optionB").on("click", reset);
  // $("#optionC").on("click", start);
  // $("#optionC").on("click", start);
};

// start game function
function startGame() {
  console.log("did it work?");
  timeVariable = setInterval(count, 1000);
  clockRunning = true;
  console.log(timeVariable);
  var html = triviaData[0];
  renderQuestion(
    html.id,
    html.question,
    html.choices[0],
    html.choices[1],
    html.choices[2],
    html.choices[3]
  );
}

function count() {
  time--;
  var convertedTime = timeConverter(time);
  $("#timer").text(convertedTime);
}

function timeConverter(time) {
  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}

function establishQuestion(question) {
  var questionHTML = `<p></p>`;
  return questionHTML;
}

function renderQuestion(id, question, choice0, choice1, choice2, choice3) {
  $(".content").html(
    `<p id="question${id}["id"]" class="question d-flex flex-column col-12">${question}</p> <div class="answer col-12">${choice0}</div> <div class="answer col-12">${choice1}</div> <div class="answer col-12">${choice2}</div> <div class="answer col-12">${choice3}</div>`
  );
}
// += establishQuestion(triviaData[0].question);
