import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { quizId } from './quiz-show'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const QuizTake = (props) => {
  const [ questions, setQuestions ] = useState([])
  const [ answersSubmitted, setAnswersSubmitted ] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/questions/`)
      .then(res => setQuestions(res.data.questions))
      .catch(console.error)
  }, [])

  // Filter through all questions on database and return an array containing the questions that were created from (are owned by) the quiz currently being viewed
  const questionsCreatedByThisQuiz = questions.filter(question => question.quiz.id === quizId)

  const selectedAnswersArr = []
  const handleChange = event => {
    // I need to figure out how to make the radio button show as selected
    event.persist()
    selectedAnswersArr.push(event.target.name)
  }

  // Start the score at 1 to enable ternary logic in the main return below (between the <ul> tags)
  // If we set the score to start at 0 (as one would assume) then the 'submit answers' button would never render, as 0 is falsy
  let score = 1

  const handleSubmit = event => {
    event.preventDefault()
    for (let i = 0; i < questionsCreatedByThisQuiz.length; i++) {
      console.log('question number ', questionsCreatedByThisQuiz[i].answerkey, 'corresponding selected answer is', selectedAnswersArr[i])
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
      {answersSubmitted 
        ? '' 
        : <Button 
            onClick={handleSubmit} 
            className="btn btn-success mt-2" 
            type="submit">Submit Answers
          </Button>
        }
        {answersSubmitted 
          ? <Link to={{ pathname: `/quizzes/${quizId}` }}>Go Back</Link>
          : ''
        }
    </div>
  )
}

export default QuizTake
