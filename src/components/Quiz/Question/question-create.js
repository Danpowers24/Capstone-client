import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../../apiConfig'
import QuestionForm from '../../shared/QuestionForm'

const QuestionCreate = () => {
  const [ question, setQuestion ] = useState({
    question: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answerkey: ''
  })

  const [ createdQuestionId, setCreatedQuestionId ] = useState(null)

  const handleChange = event => {
    event.persist()
    console.log('event.target.value', event.target.value)
    console.log('event.target.name', event.target.name)
    // const updatedField = { [event.target.name]: event.target.value }
    // const editedMovie = Object.assign(movie, updatedField)
    setQuestion(quiz => ({ ...quiz, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/questions`,
      method: 'POST',
      data: { question }
    })
      .then(res => setCreatedQuestionId(res.data.question.id))
      .catch(console.error)
  }

  if (createdQuestionId) {
    // this will redirect to create question
    return <Redirect to={`/questions/${createdQuestionId}`} />
  }

  return (
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <QuestionForm
        question={question}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath='/'
      />
    </div>
  )
}

export default QuestionCreate
