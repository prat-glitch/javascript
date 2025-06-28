let currentQuestionIndex = 0;
let questionsData = [];
let userAnswers = [];

// Fetch questions from JSON
fetch('questions.json')
  .then((response) => response.json())
  .then((data) => {
    questionsData = data;
    showQuestion();
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });

function showQuestion() {
  const question = questionsData[currentQuestionIndex];
  document.getElementById('quiz').innerHTML = `Q${currentQuestionIndex + 1}: ${question.question}`;

  // Reset options
  question.options.forEach((opt, i) => {
    const btn = document.getElementById(`opt${i + 1}`);
    btn.innerText = opt;
    btn.disabled = false;
    btn.classList.remove("selected");
  });

  // Hide buttons initially
}
document.getElementById('next-btn').style.display = 'none';
document.getElementById('submit-btn').style.display = 'none';

// Handle option clicks
for (let i = 1; i <= 4; i++) {
  document.getElementById(`opt${i}`).addEventListener('click', function () {
    // Highlight selected
    for (let j = 1; j <= 4; j++) {
      document.getElementById(`opt${j}`).classList.remove('selected');
    }
    this.classList.add('selected');

    // Store selected answer temporarily
    const selected = this.innerText;
    userAnswers[currentQuestionIndex] = {
      question: questionsData[currentQuestionIndex].question,
      selectedAnswer: selected,
      correctAnswer: questionsData[currentQuestionIndex].answer
    };

    // Show next or submit button
    if (currentQuestionIndex === questionsData.length - 1) {
      document.getElementById('submit-btn').style.display = 'inline-block';
    } else {
      document.getElementById('next-btn').style.display = 'inline-block';
    }
  });
}

// NEXT button click
document.getElementById('next-btn').addEventListener('click', () => {
  currentQuestionIndex++;
  showQuestion();
});
document.getElementById('back-btn').addEventListener('click',() =>{
  currentQuestionIndex--;
  showQuestion();
});

// SUBMIT button click
document.getElementById('submit-btn').addEventListener('click', () => {
  let score = 0;
  userAnswers.forEach(ans => {
    if (ans.selectedAnswer === ans.correctAnswer) {
      score++;
    }
  });

  document.getElementById('quiz').innerText = `You scored ${score} out of ${questionsData.length}!`;
  document.getElementById('answers-buttons').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('submit-btn').style.display = 'none';
});
