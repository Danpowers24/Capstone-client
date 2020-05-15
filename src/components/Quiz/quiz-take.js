import React, { useState, useEffect } from 'react'
// import TakeQuizForm from '../Forms/TakeQuizForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import { questionObj } from './Question/question-index'
import { quizId } from './quiz-show'
import Button from 'react-bootstrap/Button'

const QuizTake = (props) => {
  // console.log('props are', props)
  const [ questions, setQuestions ] = useState([])
  // need new state variable
  // call it answer
  // tie selected queestion to this answer
  // not sure what to set initial state to
  const [ answer, setAnswer ] = useState([])
  console.log('answer is', answer)
  // console.log('in quiz-take.js, questions is ', questions)
  // console.log('in quiz-take.js, questionObj is ', questionObj)

  useEffect(() => {
    axios(`${apiUrl}/questions/`)
      .then(res => setQuestions(res.data.questions))
      .catch(console.error)
  }, [])

  const selectedAnswer = Object.keys(answer)[0]
  console.log('selectedAnswer is: ', selectedAnswer)

  // const [ questionAnswerId, setQuestionAnswerId ] = useState(null)

  const handleChange = event => {
    event.persist()
    // setting the state of answers state variable, not questions
    setAnswer(answer => ({ [event.target.name]: event.target.value }))
    // should be updating the answer state
    // so then I will have two arrays that I can check against each other
    // anwsers array
    // questions array
    // check will be in handleSubmit
  }

  const checkForCorrectAnswer = (selectedAnswer, questionsCreatedByThisQuiz) => {
    if (selectedAnswer === questionsCreatedByThisQuiz) {
      console.log('correct answer!')
    } else {
      console.log('some sort of match not found')
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('handlesubmit has been called, this is the event', event)
    // console.log('answer is: ', answer)
    // set the following to answer 1/2/3/4
      .then((selectedAnswer, questionsCreatedByThisQuiz) => {
        const firstQuestionCreatedByThisQuiz = questionsCreatedByThisQuiz[0]
        console.log('firstQuestionCreatedByThisQuiz.answerkey is ', firstQuestionCreatedByThisQuiz.answerkey)
        if (selectedAnswer === firstQuestionCreatedByThisQuiz.answerkey) {
          console.log('correct answer!')
        } else {
          console.log('some sort of match not found')
        }
      })
      .then(checkForCorrectAnswer())
      .catch(console.error)
      // run a check if correct answer function
  }

  // console.log('handleSubmit is: ', handleSubmit)

  // Filter through all questions on database and return an array containing
  // the questions that were created from (are owned by) the quiz being currently viewed
  const questionsCreatedByThisQuiz = questions.filter(question => question.quiz.id === quizId)

  console.log('questionsCreatedByThisQuiz is', questionsCreatedByThisQuiz)

  const firstQuestionCreatedByThisQuiz = questionsCreatedByThisQuiz[0]

  console.log('firstQuestionCreatedByThisQuiz is: ', firstQuestionCreatedByThisQuiz)

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
            name="answer4s"
            value={questions.answer4}
            checked={false}
            className="form-check-input"
            onChange={handleChange}
          />
          {question.answer4}
        </label>
      </div>
      <div style={styles}>
        <label>
          <input
            type="radio"
            name="submit button"
            value='Submit button'
            checked={false}
            className="form-check-input"
            onChange={handleSubmit}
          />
          {question.answer4}
        </label>
      </div>
      <Button onSubmit={handleSubmit} className="btn btn-success mt-2" type="submit">
          Submit Answer
      </Button>
    </li>
  })

  // // check if it's the right answer
  // if (questionAnswerId && questionAnswerId === answerkey) {
  //   // give user feedback
  //   console.log('correct answer!')
  // } else if (questionAnswerId && questionAnswerId !== answerkey) {
  //   // give user feedback
  //   console.log('incorrect answer')
  // }

  // OK so I am trying to do something similar to waht Brandon and Nick were trying to figure out
  // early yesterday. about looping through an array of objects and displaying the
  // first key of each of the objects.
  // except I want to render all keys of an object on one page, then on the next page,
  // render all the keys of an object, kind of
  // I want to be able to extrat them and inject them into the form so the user can
  // fill out one question per view

  // <TakeQuizForm
  //   handleSubmit={handleSubmit}
  //   handleChange={handleChange}
  //   questions={questions}
  //   questionAnswerId={questionAnswerId}
  // />

  return (
    <div>
      <h4>Questions</h4>
      <ul>
        {showTheseQuestions}
      </ul>
    </div>
  )
}

export default QuizTake
