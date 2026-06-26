let quiz = document.querySelector(".quiz");
const nextBtn = document.querySelector(".next");
let currentQuestionIndex = 0;
let score = 0;

const data = [
  {
    question: "بزرگترین حیوان دنیا کدام است؟",
    answers: [
      {
        text: "فیل",
        currect: false,
      },
      {
        text: "وال آبی",
        currect: true,
      },
      {
        text: "زرافه",
        currect: false,
      },
      {
        text: "کرگدن آفریقایی",
        currect: false,
      },
    ],
  },
  {
    question: "کوچکترین قاره دنیا کدام است؟",
    answers: [
      {
        text: "سومالی",
        currect: false,
      },
      {
        text: "اروپا",
        currect: false,
      },
      {
        text: "استرالیا",
        currect: true,
      },
      {
        text: "آمریکای جنوبی",
        currect: false,
      },
    ],
  },
  {
    question: "کدام یک از گزینه های زیر ویتامین c بیشتری دارد؟",
    answers: [
      {
        text: "فلفل دلمه",
        currect: true,
      },
      {
        text: "پرتقال",
        currect: false,
      },
      {
        text: "لیمو",
        currect: false,
      },
      {
        text: "انبه",
        currect: false,
      },
    ],
  },
  {
    question: "کدام یک از رنگ های زیر طول موج کمتری دارد؟",
    answers: [
      {
        text: "قرمز",
        currect: false,
      },
      {
        text: "آبی",
        currect: false,
      },
      {
        text: "زرد",
        currect: false,
      },
      {
        text: "بنفش",
        currect: true,
      },
    ],
  },
];
initialNextBtn();
startQuiz();

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuiz();
}
function initialNextBtn() {
  nextBtn.innerHTML = "بعدی";
  nextBtn.dataAction = "next";

  nextBtn.addEventListener("click", (e) => {
    if (nextBtn.dataAction == "next") {
      goNext(e);
    } else if (nextBtn.dataAction == "again" && currentQuestionIndex == 0) {
      nextBtn.dataAction = "next";
      startQuiz();
    }
  });
}
function checkAnswer(e) {
  const { target } = e;
  let isCurrect = target.dataset.isCurrect;
  isCurrect = true ? isCurrect == "true" : false;
  if (isCurrect) {
    target.style.background = "#98fc98ff";
    score++;
  } else {
    target.style.background = "#f87d7dff";
    const currectAnswer = Array.from(target.parentElement.children).find(
      (child) => {
        return child.dataset.isCurrect == "true";
      }
    );
    currectAnswer.style.background = "#98fc98ff";
  }
  const btns = quiz.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.disabled = true;
  });
  nextBtn.style.visibility = "visible";
}

function showQuiz() {
  quiz.innerHTML = "";

  data.forEach((data, index) => {
    if (index == currentQuestionIndex) {
      const question = buildElm("h2", data.question);

      for (let i = 0; i < data.answers.length; i++) {
        const answer = data.answers[i].text;
        const isCurrect = data.answers[i].currect;

        const btn = buildElm("button", answer);
        btn.dataset.isCurrect = isCurrect;
      }
    }
  });
  const btns = quiz.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => checkAnswer(e));
  });
  nextBtn.style.visibility = "hidden";
}

function buildElm(elm, text) {
  const element = document.createElement(elm);
  element.innerHTML = text;
  quiz.appendChild(element);
  return element;
}

function goNext(e) {
  let { target } = e;

  if (currentQuestionIndex >= 3) {
    currentQuestionIndex = 0;
    nextBtn.dataAction = "again";
    showResult();
  } else {
    currentQuestionIndex++;
    showQuiz();
  }
}

function showResult() {
  quiz.innerHTML = `امتیاز شما ${score} از ${data.length} است.`;
  nextBtn.innerHTML = "شروع دوباره";
  nextBtn.style.visibility = "visible";
}
