// Represents a quiz question
// {
//   question: "string",
//   options: ["string", "string", ...],
//   answer: "string"
// }

/**
 * @typedef {Object} Question
 * @property {string} question
 * @property {string[]} options
 * @property {string} answer
 */

/**
 * @typedef {Object} QuizState
 * @property {number} score
 * @property {number} timeSpent
 */

/**
 * @typedef {Object} QuizResult
 * @property {number} score
 * @property {number} timeSpent
 * @property {number} totalQuestions
 * @property {number} percentage
 * @property {number} correctAnswers
 * @property {number} incorrectAnswers
 */
