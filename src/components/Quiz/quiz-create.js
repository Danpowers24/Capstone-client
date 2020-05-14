import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import QuizForm from '../Forms/QuizForm'

const QuizCreate = (props, match, location, cancelPath) => {
  const [ quiz, setQuiz ] = useState({
    name: '',
    description: '',
    user_id: props.user.id
  })

  const [ createdQuizId, setCreatedQuizId ] = useState(null)

  const handleChange = event => {
    event.persist()
    console.log('event.target.value', event.target.value)
    console.log('event.target.name', event.target.name)
    // const updatedField = { [event.target.name]: event.target.value }
    // const editedMovie = Object.assign(movie, updatedField)
    setQuiz(quiz => ({ ...quiz, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(quiz)
    console.log()
    axios({
      url: `${apiUrl}/quizzes`,
      method: 'POST',
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
        cancelPath='/'
      />
    </div>
  )
}

export default QuizCreate
