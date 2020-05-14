import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { quizid } from '../quiz-show'

import apiUrl from '../../../apiConfig'
// import Layout from '../shared/Layout'

let questionObj = ''

const QuestionIndex = (props, quiz) => {
  const [questions, setQuestions] = useState([])

  questionObj = questions

  useEffect(() => {
    axios(`${apiUrl}/questions/`)
      .then(res => setQuestions(res.data.questions))
      .catch(console.error)
  }, [])

  console.log('in question-index, props are', props)
  console.log('in question-index, quizid is', quizid)

  // if quiz.id (from quiz.show) === props.match.params.id (in this file),
  // then list out the question.question

  let questionsJsx = ''

  questionsJsx = questions.map(question => {
    console.log('in the for loop, quizid is ', quizid)
    console.log('in the for loop, question is ', question)
    // let counter = 0
    if (quizid === question.quiz.id) {
      return <li key={question.id}>
        <Link to={`/questions/${question.id}`}>{question.question}</Link>
      </li>
    }
    // else if (counter = 0) {
    // return <p>No questions<p>
    // }
    // logic to display 'no questions' message if there are no questions
    // I should make a counter, every time there is a match
    // else {
    //   return <Link to={`/questions/${question.id}`}>Oops, no questions</Link>
    // }
  }
  )
  console.log('in question-index, questions is', questions)
  return (
    <div>
      <h4>Questions</h4>
      <ul>
        {questionsJsx}
      </ul>
    </div>
  )
}

export default QuestionIndex
export { questionObj }
