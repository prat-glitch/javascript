import React, { useState } from 'react';
import {
  Trophy,
  Settings,
  User,
  Moon,
  Sun,
  Menu,
  X,
  Home,
  BarChart3,
  HelpCircle,
  Star,
  Clock,
  Target,
  Award,
  Bookmark,
  Share2,
  Download,
  Volume2,
  VolumeX,
} from 'lucide-react';

const Navbar = ({
  currentScreen,
  onNavigate,
  score = 0,
  totalQuestions = 0,
  timeSpent = 0,
  onRestart,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleSound = () => setIsSoundEnabled(!isSoundEnabled);

  const minutes = Math.floor(timeSpent / 60);
  const seconds = timeSpent % 60;

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, screen: 'welcome' },
    { id: 'stats', label: 'Statistics', icon: BarChart3, screen: 'results' },
    { id: 'help', label: 'Help & FAQ', icon: HelpCircle, screen: 'welcome' },
  ];

  const quickActions = [
    { id: 'bookmark', label: 'Bookmarks', icon: Bookmark },
    { id: 'share', label: 'Share Quiz', icon: Share2 },
    { id: 'download', label: 'Export Results', icon: Download },
  ];

  const handleQuickAction = (actionId) => {
    switch (actionId) {
      case 'share':
        if (navigator.share) {
          navigator.share({
            title: 'QuizMaster - Test Your Knowledge',
            text: 'Check out this amazing quiz app!',
            url: window.location.href,
          });
        }
        break;
      case 'download':
        console.log('Downloading results...');
        break;
      case 'bookmark':
        console.log('Adding to bookmarks...');
        break;
      default:
        break;
    }
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl shadow-lg">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                QuizMaster
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">Test Your Knowledge</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.screen)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                  currentScreen === item.screen
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Quiz Info */}
          {currentScreen === 'quiz' && totalQuestions > 0 && (
            <div className="hidden md:flex items-center space-x-6 bg-gray-800/50 backdrop-blur-sm px-6 py-2 rounded-xl border border-gray-700">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-blue-400" />
                <span className="text-white font-medium">
                  {score}/{totalQuestions}
                </span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span className="text-white font-medium">
                  {minutes}:{seconds.toString().padStart(2, '0')}
                </span>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="hidden xl:flex items-center space-x-2">
            {quickActions.map((action) => (
              <button
                key={action.id}
                onClick={() => handleQuickAction(action.id)}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                title={action.label}
              >
                <action.icon className="w-4 h-4" />
              </button>
            ))}
          </div>

          {/* Right-side toggles */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleSound}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              title={isSoundEnabled ? 'Mute sounds' : 'Enable sounds'}
            >
              {isSoundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              title="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200">
              <Settings className="w-4 h-4" />
            </button>

            {/* User dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:block text-sm">Profile</span>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-xl shadow-xl py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <p className="text-white font-medium">Guest User</p>
                    <p className="text-gray-400 text-xs">guest@quizmaster.com</p>
                  </div>
                  <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                    View Profile
                  </button>
                  <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                    Quiz History
                  </button>
                  <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                    Achievements
                  </button>
                  <div className="border-t border-gray-700 mt-2 pt-2">
                    <button className="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700 transition-colors">
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-700/50 py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.screen);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl transition-all duration-200 ${
                    currentScreen === item.screen
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}

              <div className="border-t border-gray-700/50 pt-4 mt-4">
                <p className="text-gray-400 text-sm font-medium px-4 mb-2">Quick Actions</p>
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => {
                      handleQuickAction(action.id);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                  >
                    <action.icon className="w-4 h-4" />
                    <span className="text-sm">{action.label}</span>
                  </button>
                ))}
              </div>

              {currentScreen === 'quiz' && totalQuestions > 0 && (
                <div className="border-t border-gray-700/50 pt-4 mt-4">
                  <div className="bg-gray-800/50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Current Score</span>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-white font-medium">
                          {score}/{totalQuestions}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Time Elapsed</span>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-purple-400" />
                        <span className="text-white font-medium">
                          {minutes}:{seconds.toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {onRestart && currentScreen !== 'welcome' && (
                <div className="border-t border-gray-700/50 pt-4 mt-4">
                  <button
                    onClick={() => {
                      onRestart();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl transition-all duration-200 hover:from-green-700 hover:to-emerald-700"
                  >
                    <Award className="w-5 h-5" />
                    <span className="font-medium">Start New Quiz</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
