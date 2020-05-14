import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { quizid } from './quiz-show'

import apiUrl from '../../apiConfig'
import UpdateQuizForm from '../Forms/UpdateQuizForm'

const QuizUpdate = (props, match, location, cancelPath) => {
  // console.log('in quiz-update, props are ', props)
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

  const handleSubmit = event => {
    event.preventDefault()
    console.log(props)
    console.log(quizid)
    axios({
      url: `${apiUrl}/quizzes/${quizid}`,
      method: 'PATCH',
      data: { quiz }
    })
      .then(res => setCreatedQuizId(res.data.quiz.id))
      .catch(console.error)
  }

  if (createdQuizId) {
    // this will redirect to create question
    return <Redirect to={'/question-create/'} />
  }

  return (
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <UpdateQuizForm
        quiz={quiz}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/quizzes/${quizid}`}
      />
    </div>
  )
}

export default QuizUpdate
