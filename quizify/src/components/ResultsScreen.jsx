import React from 'react';
import {
  Trophy,
  RefreshCw,
  Share2,
  Target,
  Clock,
  Award,
  Download,
  Star,
  TrendingUp,
} from 'lucide-react';

const ResultsScreen = ({ result, onRestart }) => {
  const getScoreMessage = (percentage) => {
    if (percentage >= 90)
      return { message: 'Outstanding!', emoji: '🏆', color: 'from-yellow-500 to-orange-500' };
    if (percentage >= 80)
      return { message: 'Excellent!', emoji: '🎉', color: 'from-green-500 to-emerald-500' };
    if (percentage >= 70)
      return { message: 'Great job!', emoji: '👏', color: 'from-blue-500 to-cyan-500' };
    if (percentage >= 60)
      return { message: 'Good effort!', emoji: '👍', color: 'from-purple-500 to-pink-500' };
    if (percentage >= 50)
      return { message: 'Keep trying!', emoji: '💪', color: 'from-orange-500 to-red-500' };
    return { message: 'Better luck next time!', emoji: '🤗', color: 'from-red-500 to-rose-500' };
  };

  const scoreData = getScoreMessage(result.percentage);
  const minutes = Math.floor(result.timeSpent / 60);
  const seconds = result.timeSpent % 60;

  const achievements = [
    {
      title: 'Quiz Completed',
      description: 'Finished all questions',
      icon: Trophy,
      earned: true,
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Speed Demon',
      description: 'Completed in under 5 minutes',
      icon: Clock,
      earned: result.timeSpent < 300,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Perfect Score',
      description: '100% accuracy',
      icon: Star,
      earned: result.percentage === 100,
      color: 'from-yellow-500 to-orange-600',
    },
    {
      title: 'Knowledge Seeker',
      description: 'Scored above 80%',
      icon: TrendingUp,
      earned: result.percentage >= 80,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl w-full mx-auto">
        <div className="text-center mb-8">
          <div className={`bg-gradient-to-r ${scoreData.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
            <Trophy className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Quiz Complete!</h1>

          <p className={`text-2xl font-semibold bg-gradient-to-r ${scoreData.color} bg-clip-text text-transparent mb-2`}>
            {scoreData.message} {scoreData.emoji}
          </p>

          <div className="text-6xl md:text-7xl font-bold text-white mb-2">
            {result.percentage}%
          </div>

          <p className="text-lg text-gray-300">
            {result.score} out of {result.totalQuestions} questions correct
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-900/30 border border-green-500/30 rounded-2xl p-6 text-center backdrop-blur-sm">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Correct Answers</h3>
            <p className="text-2xl font-bold text-green-400">{result.correctAnswers}</p>
          </div>

          <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-6 text-center backdrop-blur-sm">
            <Award className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Incorrect Answers</h3>
            <p className="text-2xl font-bold text-red-400">{result.incorrectAnswers}</p>
          </div>

          <div className="bg-blue-900/30 border border-blue-500/30 rounded-2xl p-6 text-center backdrop-blur-sm">
            <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Time Taken</h3>
            <p className="text-2xl font-bold text-blue-400">
              {minutes}:{seconds.toString().padStart(2, '0')}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  achievement.earned
                    ? `bg-gradient-to-r ${achievement.color} border-transparent shadow-lg`
                    : 'bg-gray-800/30 border-gray-600 opacity-50'
                }`}
              >
                <achievement.icon
                  className={`w-6 h-6 mx-auto mb-2 ${
                    achievement.earned ? 'text-white' : 'text-gray-500'
                  }`}
                />
                <h4
                  className={`text-sm font-semibold text-center mb-1 ${
                    achievement.earned ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {achievement.title}
                </h4>
                <p
                  className={`text-xs text-center ${
                    achievement.earned ? 'text-white/80' : 'text-gray-500'
                  }`}
                >
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
          >
            <RefreshCw className="w-6 h-6 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Take Quiz Again
          </button>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Quiz Results',
                  text: `I scored ${result.percentage}% on the Knowledge Quiz! Can you beat my score?`,
                  url: window.location.href,
                });
              } else {
                const text = `I scored ${result.percentage}% on the Knowledge Quiz! Can you beat my score? ${window.location.href}`;
                navigator.clipboard.writeText(text);
                alert('Results copied to clipboard!');
              }
            }}
            className="bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 hover:border-gray-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <Share2 className="w-6 h-6 mr-2" />
            Share Results
          </button>

          <button
            onClick={() => {
              console.log('Downloading results...');
              alert('Results downloaded!');
            }}
            className="bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 hover:border-gray-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <Download className="w-6 h-6 mr-2" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
