import React from 'react';
import { Clock, Target } from 'lucide-react';

const ProgressBar = ({ current, total, score, timeSpent = 0 }) => {
  const progressPercentage = (current / total) * 100;
  const minutes = Math.floor(timeSpent / 60);
  const seconds = timeSpent % 60;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-300">
              Question {current} of {total}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Target className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">
              Score: {score}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">
              {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>

          <div className="text-sm font-medium text-gray-300">
            {Math.round(progressPercentage)}% Complete
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
          style={{ width: `${progressPercentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>

      <div className="flex justify-between mt-2 text-xs text-gray-400">
        <span>Start</span>
        <span>Complete</span>
      </div>
    </div>
  );
};

export default ProgressBar;
