import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';

function App() {
  const [appState, setAppState] = useState('welcome'); // 'welcome' | 'quiz' | 'results'
  const [questions, setQuestions] = useState([]);
  const [quizResult, setQuizResult] = useState(null);
  const [currentQuizState, setCurrentQuizState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch questions from API when starting quiz
  const handleStart = async () => {
    setLoading(true);
    setError(null);
    setQuizResult(null);
    setCurrentQuizState(null);

    try {
      const res = await fetch('https://opentdb.com/api.php?amount=8&type=multiple'); // You can use your own backend API
      const data = await res.json();

      const formattedQuestions = data.results.map((q, index) => {
        const allOptions = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);
        return {
          id: index + 1,
          question: q.question,
          options: allOptions,
          correctAnswer: allOptions.indexOf(q.correct_answer),
          category: q.category,
          difficulty: q.difficulty,
          explanation: `Correct answer: ${q.correct_answer}` // You can generate smarter explanations later
        };
      });

      setQuestions(formattedQuestions);
      setAppState('quiz');
    } catch (err) {
      console.error(err);
      setError('Failed to load quiz questions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // When user finishes quiz
  const handleQuizComplete = (state) => {
    const result = {
      score: state.score,
      totalQuestions: questions.length,
      percentage: Math.round((state.score / questions.length) * 100),
      timeSpent: state.timeSpent,
      correctAnswers: state.score,
      incorrectAnswers: questions.length - state.score
    };

    setQuizResult(result);
    setCurrentQuizState(state);
    setAppState('results');
  };

  // Restart quiz and go to welcome screen
  const handleRestart = () => {
    setAppState('welcome');
    setQuizResult(null);
    setCurrentQuizState(null);
    setQuestions([]);
    setError(null);
  };

  // Optional navigation handler (if using from Navbar)
  const handleNavigate = (screen) => {
    if (screen === 'welcome') {
      handleRestart();
    } else if (screen === 'results' && quizResult) {
      setAppState('results');
    } else if (screen === 'quiz' && appState !== 'quiz') {
      handleStart();
    }
  };

  // Loading and error state
  if (loading) {
    return <div className="text-white p-8 text-center text-xl">Loading questions...</div>;
  }

  if (error) {
    return (
      <div className="text-red-400 p-8 text-center">
        <p className="mb-4">{error}</p>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
          onClick={handleStart}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar 
        currentScreen={appState}
        onNavigate={handleNavigate}
        score={currentQuizState ? currentQuizState.score : 0}
        totalQuestions={questions.length}
        timeSpent={currentQuizState ? currentQuizState.timeSpent : 0}
        onRestart={handleRestart}
      />

      {appState === 'welcome' && (
        <WelcomeScreen 
          onStart={handleStart} 
          totalQuestions={questions.length || 8} // fallback default
        />
      )}

      {appState === 'quiz' && questions.length > 0 && (
        <QuizScreen 
          questions={questions}
          onComplete={handleQuizComplete}
        />
      )}

      {appState === 'results' && quizResult && (
        <ResultsScreen 
          result={quizResult}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
