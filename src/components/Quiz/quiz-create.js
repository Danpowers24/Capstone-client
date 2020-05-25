import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import QuizForm from '../Forms/QuizForm'

const QuizCreate = (props, match, location, cancelPath, user) => {
  const [ quiz, setQuiz ] = useState({
    name: '',
    description: '',
    user_id: props.user.id
  })

  const [ createdQuizId, setCreatedQuizId ] = useState(null)

  const handleChange = event => {
    event.persist()
    setQuiz(quiz => ({ ...quiz, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event, user) => {
    // console.log(props)
    event.preventDefault()
    // console.log(quiz)
    // console.log()
    axios({
      url: `${apiUrl}/quizzes`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { quiz }
    })
      .then(res => setCreatedQuizId(res.data.quiz.id))
      .catch(console.error)
  }

  if (createdQuizId) {
    // this will redirect to create question
    return <Redirect to={`/quizzes/${createdQuizId}`} />
  }

  return (
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <QuizForm
        quiz={quiz}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath='/quiz-index/'
      />
    </div>
  )
}

export default QuizCreate
