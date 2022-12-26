import { data } from './data.js';
import { Question } from './Question.js';

const questiosArray = data.map(q => new Question(q.question, q.choices, q.answer))

// const question = new Question(data[0].question, data[0].choices, data[0].answer)

console.log(questiosArray)

// const result = question.isCorrectAnswer('Machine Code')