import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { quizId } from '../quiz-show'
import { questionId } from './question-show'

import apiUrl from '../../../apiConfig'
import UpdateQuestionForm from '../../Forms/UpdateQuestionForm'

const QuestionUpdate = (props, match, location, cancelPath) => {
  // console.log('in quiz-update, props are ', props)
  const [ question, setQuestion ] = useState({
    name: '',
    description: '',
    user_id: props.user.id
  })

  const [ createdQuestionId, setCreatedQuestionId ] = useState(null)

  const handleChange = event => {
    event.persist()
    setQuestion(quiz => ({ ...question, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(props)
    console.log('quizid (for some reason) is: ', quizId)
    axios({
      url: `${apiUrl}/questions/${quizId}`,
      method: 'PATCH',
      data: { question }
    })
      .then(res => setCreatedQuestionId(res.data.quiz.id))
      .catch(console.error)
  }

  if (createdQuestionId) {
    // this will redirect to create question
    return <Redirect to={`/questions/${question.id}`} />
  }

  return (
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <UpdateQuestionForm
        question={question}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/questions/${questionId}`}
      />
    </div>
  )
}

export default QuestionUpdate
