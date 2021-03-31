
let questions = [
  {
    id: 1,
    question: "What is the 16-bit compiler allowable range for integer constants?",
    answer: "-32768 to 32767",
    options: [
      "-3.4e38 to 3.4e38",
      "-32767 to 32768",
      "-32668 to 32667",
      "-32768 to 32767"
    ]
  },
  {
    id: 2,
    question: "Study the following program:<br/>main()  <br/>{printf();  <br/>main();}  <br/>What will be the output of this program?<br/>",
    answer: "It will keep on printing javatpoint",
    options: [
      "Wrong statement",
      "It will keep on printing javatpoint",
      "It will Print javatpoint once",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is required in each C program?",
    answer: "The program must have at least one function",
    options: [
      "The program must have at least one function",
      "The program does not require any function",
      "Input data",
      "Output data"
    ]
  },
  {
    id: 4,
    question: "Which of the following comment is correct when a macro definition includes arguments?",
    answer: "The opening parenthesis should immediately follow the macro name.",
    options: [
      "The opening parenthesis should immediately follow the macro name.",
      "There should be at least one blank between the macro name and the opening parenthesis.",
      "There should be only one blank between the macro name and the opening parenthesis.",
      "All the above comments are correct."
    ]
  },
  {
    id: 5,
    question: "What is a lint?",
    answer: " Analyzing tool",
    options: [
      "C compiler",
      "Interactive debugger",
      "Analyzing tool",
      "C interpreter"
    ]
  },
  
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
