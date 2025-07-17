import React, { useState } from 'react';
import { CheckCircle, XCircle, ChevronRight, Lightbulb } from 'lucide-react';

const QuestionCard = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  showExplanation,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnswerClick = (answerIndex) => {
    if (selectedAnswer === null) {
      setIsAnimating(true);
      onAnswerSelect(answerIndex);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'from-green-500 to-emerald-500';
      case 'medium':
        return 'from-yellow-500 to-orange-500';
      case 'hard':
        return 'from-red-500 to-rose-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Geography: 'from-blue-500 to-cyan-500',
      Science: 'from-purple-500 to-pink-500',
      Art: 'from-rose-500 to-orange-500',
      Biology: 'from-green-500 to-teal-500',
      History: 'from-amber-500 to-yellow-500',
      Chemistry: 'from-indigo-500 to-purple-500',
      Technology: 'from-cyan-500 to-blue-500',
      Mathematics: 'from-violet-500 to-purple-500',
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getOptionClassName = (index) => {
    if (selectedAnswer === null) {
      return 'bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 hover:border-blue-400 cursor-pointer transform hover:scale-105 hover:shadow-lg';
    }

    if (index === question.correctAnswer) {
      return 'bg-green-900/30 border-green-400 cursor-default shadow-lg shadow-green-500/20';
    }

    if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) {
      return 'bg-red-900/30 border-red-400 cursor-default shadow-lg shadow-red-500/20';
    }

    return 'bg-gray-800/30 border-gray-600 cursor-default opacity-60';
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl shadow-2xl p-8 max-w-4xl w-full mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div
            className={`bg-gradient-to-r ${getCategoryColor(
              question.category
            )} px-4 py-2 rounded-full shadow-lg`}
          >
            <span className="text-white font-medium text-sm">{question.category}</span>
          </div>
          <div
            className={`bg-gradient-to-r ${getDifficultyColor(
              question.difficulty
            )} px-4 py-2 rounded-full shadow-lg`}
          >
            <span className="text-white font-medium text-sm capitalize">
              {question.difficulty}
            </span>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
          {question.question}
        </h2>
      </div>

      <div className="grid gap-4 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(index)}
            disabled={selectedAnswer !== null}
            className={`${getOptionClassName(index)} p-6 rounded-2xl border-2 transition-all duration-300 text-left relative overflow-hidden ${
              isAnimating && selectedAnswer === index ? 'animate-pulse' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-white pr-4">{option}</span>
              {selectedAnswer !== null && (
                <div className="ml-4 flex-shrink-0">
                  {index === question.correctAnswer ? (
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  ) : index === selectedAnswer ? (
                    <XCircle className="w-6 h-6 text-red-400" />
                  ) : null}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {showExplanation && question.explanation && (
        <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 mb-8 animate-fade-in">
          <div className="flex items-start space-x-3">
            <Lightbulb className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-300 mb-2">Explanation:</h3>
              <p className="text-blue-100 leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {selectedAnswer !== null && (
        <div className="flex justify-end">
          <button
            onClick={onNext}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group"
          >
            Next Question
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
