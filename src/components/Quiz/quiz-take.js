import React, { useState, useEffect } from 'react'
// import TakeQuizForm from '../Forms/TakeQuizForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import { questionObj } from './Question/question-index'
import { quizId } from './quiz-show'
import Button from 'react-bootstrap/Button'

const QuizTake = (props) => {
  // console.log('props are', props)
  // const [ answers, setAnswers ] = useState([])
  const selectedAnswersArr = []
  // const [ kevin, setKevin ] = useState()
  const [ questions, setQuestions ] = useState([])
  const [ answersSubmitted, setAnswersSubmitted ] = useState(false)
  // I need a state variable in here that ends up looking like
  // const [ answerKey, setAnswerKey ] =
  // { selected answer for question1: answer 2 }
  // { selected answer for question2: answer 4 }
  // that way, onSubmit, I can check if the selected answers ===
  console.log('questions is ', questions)
  useEffect(() => {
    axios(`${apiUrl}/questions/`)
      .then(res => setQuestions(res.data.questions))
      .catch(console.error)
  }, [])
  // Filter through all questions on database and return an array containing
  // the questions that were created from (are owned by) the quiz being currently viewed
  const questionsCreatedByThisQuiz = questions.filter(question => question.quiz.id === quizId)
  // const selectedAnswer = Object.keys(answers)[0]
  // console.log('selectedAnswer is: ', selectedAnswer)

  // const [ questionAnswerId, setQuestionAnswerId ] = useState(null)

  const handleChange = event => {
    // Here, I need to figure out how to make the radio button show as selected
    event.persist()
    // setting the state of answers state variable, not questions
    console.log('event.target is', event.target)
    selectedAnswersArr.push(event.target.name)
    console.log('selectedAnswersArr is ', selectedAnswersArr)
    // console.log('answers is', answers)
    // should be updating the answer state
    // so then I will have two arrays that I can check against each other
    // anwsers array
    // questions array
    // check will be in handleSubmit
  }

  let score = 1
  const handleSubmit = event => {
    event.preventDefault()
    // console.log('handleSubmit button clicked')
    // So I need to make a single button at the bottom of the page to loop through the questions
    for (let i = 0; i < questionsCreatedByThisQuiz.length; i++) {
    // if question.answer[i] === selected answer[i]
      console.log('question number ', questionsCreatedByThisQuiz[i].answerkey, 'corresponding selected answer is', selectedAnswersArr[i])
      // console.log('selectedAnswer[i]', selectedAnswer)
      if (questionsCreatedByThisQuiz[i].answerkey === selectedAnswersArr[i]) {
        console.log('right answer!')
        score++
        console.log('score is', score)
      }
    }
    setAnswersSubmitted(score)
  }

  console.log('questionsCreatedByThisQuiz is', questionsCreatedByThisQuiz)

  const styles = {
    display: 'block'
  }

  const showTheseQuestions = questionsCreatedByThisQuiz.map(question => {
    return <li key={question.id}>
      <p>{question.question}</p>
      <div style={styles}>
        <label>
          <input
            type="radio"
            name="answer1"
            value={questions.answer1}
            checked={false}
            className="form-check-input"
            onChange={handleChange}
          />
          {question.answer1}
        </label>
      </div>
      <div style={styles}>
        <label>
          <input
            type="radio"
            name="answer2"
            value={questions.answer2}
            checked={false}
            className="form-check-input"
            onChange={handleChange}
          />
          {question.answer2}
        </label>
      </div>
      <div style={styles}>
        <label>
          <input
            type="radio"
            name="answer3"
            value={questions.answer3}
            checked={false}
            className="form-check-input"
            onChange={handleChange}
          />
          {question.answer3}
        </label>
      </div>
      <div style={styles}>
        <label>
          <input
            type="radio"
            name="answer4"
            value={questions.answer4}
            checked={false}
            className="form-check-input"
            onChange={handleChange}
          />
          {question.answer4}
        </label>
      </div>
      <div style={styles}>
      </div>
    </li>
  })

  // this only works if the user takes the quiz in order
  // next is to only show the user the current question
  // its gotta be something to do with answerkey.length
  // if questionsCreatedByThisQuiz[i] === answerkey.length

  return (
    <div>
      <h4>Questions</h4>
      <ul>
        {answersSubmitted ? <div>You got {answersSubmitted - 1} answers correct</div> : showTheseQuestions}
      </ul>
      {answersSubmitted ? '' : <Button onClick={handleSubmit} className="btn btn-success mt-2" type="submit">
    Submit Answers
      </Button>}
    </div>
  )
}

export default QuizTake
