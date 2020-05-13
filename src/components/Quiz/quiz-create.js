import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import QuizForm from '../shared/QuizForm'

const QuizCreate = () => {
  const [ quiz, setQuiz ] = useState({
    name: '',
    description: ''
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
    return <Redirect to={`/questions/${createdQuizId}`} />
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
