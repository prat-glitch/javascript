import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';

const QuizScreen = ({ questions, onComplete }) => {
  const [quizState, setQuizState] = useState({
    currentQuestion: 0,
    score: 0,
    answers: new Array(questions.length).fill(null),
    timeSpent: 0,
    isComplete: false,
  });

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Timer: increment timeSpent every second
  useEffect(() => {
    const timer = setInterval(() => {
      setQuizState(prev => ({ ...prev, timeSpent: prev.timeSpent + 1 }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    const isCorrect = answerIndex === questions[quizState.currentQuestion].correctAnswer;
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestion] = answerIndex;

    setQuizState(prev => ({
      ...prev,
      answers: newAnswers,
      score: isCorrect ? prev.score + 1 : prev.score,
    }));
  };

  const handleNext = () => {
    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState(prev => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }));
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      const finalState = { ...quizState, isComplete: true };
      onComplete(finalState);
    }
  };

  const currentQuestion = questions[quizState.currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <ProgressBar
          current={quizState.currentQuestion + 1}
          total={questions.length}
          score={quizState.score}
          timeSpent={quizState.timeSpent}
        />

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          showExplanation={showExplanation}
        />
      </div>
    </div>
  );
};

export default QuizScreen;
