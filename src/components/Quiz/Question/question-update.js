import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
// import { quizId } from '../quiz-show'
import { questionId } from './question-show'

import apiUrl from '../../../apiConfig'
import UpdateQuestionForm from '../../Forms/UpdateQuestionForm'

const QuestionUpdate = (props, match, location, cancelPath, questionId) => {
  console.log('in question-update, props are ', props)
  const [ question, setQuestion ] = useState({
    question: 'fake',
    answer1: 'test',
    answer2: 'state',
    answer3: 'I',
    answer4: 'put',
    answerkey: 'answer1',
    user_id: props.user.id,
    quiz_id: props.quizId
})
  
  const [ createdQuestionId, setCreatedQuestionId ] = useState(null)

  useEffect(() => {
    axios(`${apiUrl}/questions/${props.match.params.id}`)
    // .then(res => console.log(res.data))
      .then(res => setQuestion(res.data.question))
      .catch(console.error)
  }, [])
  console.log('questionId is ', questionId)
  console.log('question-update.js - question is', question)

  const handleChange = event => {
    event.persist()
    setQuestion(quiz => ({ ...question, [event.target.name]: event.target.value }))
  }
  const handleSelectAnswerKey = event => {
    event.persist()
    setQuestion(question => ({ ...question, answerkey: event.target.value }))
    console.log('event.target.value', event.target.value)
    console.log('question.answerkey', question.answerkey)
  }
  const handleSubmit = event => {
    event.preventDefault()
      // console.log(props)
    // console.log('quizid (for some reason) is: ', quizId)
    // console.log('questionId is: ', questionId)
    axios({
      url: `${apiUrl}/questions/${question.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { question }
    })
      .then(res => setCreatedQuestionId(res.data))
      .catch(console.error)
  }
  // I took this out of setCreatedQuestionId() in the above .then
  // res.data.quiz.id

  if (createdQuestionId) {
    // this should redirect back to the question view, if not... something that makes sense
    return <Redirect to={`/questions/${question.id}`} />
  }

  return (
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <UpdateQuestionForm
        question={question}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/questions/${questionId}`}
        handleSelectAnswerKey={handleSelectAnswerKey}
      />
    </div>
  )
}

export default QuestionUpdate
