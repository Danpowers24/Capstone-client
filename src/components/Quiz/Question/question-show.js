import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import messages from '../../AutoDismissAlert/messages'
import apiUrl from '../../../apiConfig'

const QuestionShow = (props) => {
  console.log('in question-show, props:', props)

  const [ question, setQuestion ] = useState(null)
  const [ deleted, setDeleted ] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/questions/${props.match.params.id}`)
      .then(res => setQuestion(res.data.question))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/questions/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => console.log('messages is: ', messages))
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!question) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Quiz successfully deleted!' } }
    } />
  }

  return (
    <div>
      <h4>Quiz Name: {question.question}</h4>
      <button onClick={destroy}>Delete This Question</button>
      <Link to={`/questions/${props.match.params.id}/edit`}>
        <button>Edit Question</button>
      </Link>
      <Link to={`/question-create/${props.match.params.id}`}>
        <button>Create Question</button>
      </Link>
      <Link to={`/question-index/${props.match.params.id}`}>
        <button>See all Questions</button>
      </Link>
      <Link to="/quiz-index">Back to all quizzes</Link>
    </div>
  )
}

export default QuestionShow
