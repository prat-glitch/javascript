import React from 'react';
import { Play, Trophy, Clock, Target, Zap, Award, Users } from 'lucide-react';

const WelcomeScreen = ({ onStart, totalQuestions }) => {
  const features = [
    {
      icon: Target,
      title: "Multiple Choice",
      description: "Choose the best answer from 4 options",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "No Time Limit",
      description: "Take your time to think carefully",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Trophy,
      title: `${totalQuestions} Questions`,
      description: "Various topics and difficulties",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get explanations for each answer",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Award,
      title: "Score Tracking",
      description: "Monitor your progress in real-time",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Share Results",
      description: "Challenge friends with your score",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl w-full mx-auto transform hover:scale-105 transition-all duration-300">
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Knowledge
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Quiz</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Challenge yourself with our comprehensive quiz covering multiple topics. 
            Test your knowledge and see how you rank!
          </p>
          
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="bg-gray-700/50 px-4 py-2 rounded-full">
              <span className="text-blue-400 font-semibold">{totalQuestions} Questions</span>
            </div>
            <div className="bg-gray-700/50 px-4 py-2 rounded-full">
              <span className="text-green-400 font-semibold">Multiple Categories</span>
            </div>
            <div className="bg-gray-700/50 px-4 py-2 rounded-full">
              <span className="text-purple-400 font-semibold">All Levels</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-700/30 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className={`bg-gradient-to-r ${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button
            onClick={onStart}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center mx-auto group"
          >
            <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            Start Quiz
          </button>
          
          <p className="text-gray-400 mt-4 text-sm">
            Ready to test your knowledge? Let's see what you've got!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
