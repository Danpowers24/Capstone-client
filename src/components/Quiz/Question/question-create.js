import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../../apiConfig'
import QuestionForm from '../../Forms/QuestionForm'

const QuestionCreate = (props, match, location, cancelPath) => {
  console.log('in questions-create, props are', props)
  const [ question, setQuestion ] = useState({
    question: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answerkey: '',
    user_id: props.user.id,
    quiz_id: props.quizId
  })

  const [ createdQuestionId, setCreatedQuestionId ] = useState(null)

  const handleChange = event => {
    event.persist()
    setQuestion(quiz => ({ ...quiz, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('handleSubmit called in questions-create')
    console.log('props: ', props)
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
        cancelPath={`/quizzes/${props.quizId}`}
      />
    </div>
  )
}

export default QuestionCreate
