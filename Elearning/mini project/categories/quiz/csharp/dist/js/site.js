
let questions = [
  {
    id: 1,
    question: "We can use reserved keywords as identifiers in C#?",
    answer: "false",
    options: [
      "true",
      "false",
      "0",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "Which of the following converts a type to a double type in C#?",
    answer: "ToDouble",
    options: [
      "ToDecimal",
      "ToDouble",
      "ToInt16",
      "ToInt32"
    ]
  },
  {
    id: 3,
    question: "Which of the following operator creates a pointer to a variable in C#?",
    answer: "*",
    options: [
      "sizeof",
      "typeof",
      "&",
      "*"
    ]
  },
  {
    id: 4,
    question: "Which of the following method helps in returning more than one value?",
    answer: "Output parameters",
    options: [
      "Value parameters",
      "Reference parameters",
      "Output parameters",
      "None of the above."
    ]
  },
  {
    id: 5,
    question: "Which of the following property of Array class in C# gets the rank (number of dimensions) of the Array?",
    answer: "Rank",
    options: [
      "Rank",
      "LongLength",
      " Length",
      "None of the above."
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
