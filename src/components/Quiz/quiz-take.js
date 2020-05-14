import React, { useState, useEffect } from 'react'
// import TakeQuizForm from '../Forms/TakeQuizForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { questionObj } from './Question/question-index'
import { quizid } from './quiz-show'

const QuizTake = (props) => {
  console.log('props are', props)
  const [ questions, setQuestions ] = useState([])

  console.log('in quiz-take.js, questions is ', questions)
  console.log('in quiz-take.js, questionObj is ', questionObj)

  useEffect(() => {
    axios(`${apiUrl}/questions/`)
      .then(res => setQuestions(res.data.questions))
      .catch(console.error)
  }, [])

  const answerkey = questions.answerkey

  const [ questionAnswerId, setQuestionAnswerId ] = useState(null)

  const handleChange = event => {
    event.persist()
    setQuestions(quiz => ({ ...quiz, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(event)
    console.log()
    // set the following to answer 1/2/3/4
      .then(res => setQuestionAnswerId(answerkey))
      .catch(console.error)
  }

  console.log(handleSubmit, handleChange)

  // Filter through all questions on database and return an array containing
  // the questions that were created from (are owned by) the quiz being currently viewed
  const questionsCreatedByThisQuiz = questions.filter(question => question.quiz.id === quizid)
  console.log('questionsCreatedByThisQuiz is', questionsCreatedByThisQuiz)

  questionsCreatedByThisQuiz.forEach(question => {
    return <li key={question.id}>
      <p>{question.question}</p>
    </li>
  })

  // check if it's the right answer
  if (questionAnswerId && questionAnswerId === answerkey) {
    // give user feedback
    console.log('correct answer!')
  } else if (questionAnswerId && questionAnswerId !== answerkey) {
    // give user feedback
    console.log('incorrect answer')
  }

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
        {questionsCreatedByThisQuiz}
      </ul>
    </div>
  )
}

export default QuizTake
