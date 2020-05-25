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
    // console.log(props)
    console.log('quizid (for some reason) is: ', quizId)
    console.log('questionId is: ', questionId)
    axios({
      url: `${apiUrl}/questions/${questionId}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { question }
    })
      .then(res => setCreatedQuestionId('something'))
      .catch(console.error)
  }
  // I took this out of setCreatedQuestionId() in the above .then
  // res.data.quiz.id

  if (createdQuestionId) {
    // this should redirect back to the question view, if not... something that makes sense
    return <Redirect to={`/questions/${questionId}`} />
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
