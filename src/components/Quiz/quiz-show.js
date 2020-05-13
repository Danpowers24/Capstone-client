import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'

import apiUrl from '../../apiConfig'
// import Layout from '../shared/Layout'

const Quiz = (props) => {
  console.log('these are the props', props)
  const [ quiz, setQuiz ] = useState(null)
  const [ deleted, setDeleted ] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/quizzes/${props.match.params.id}`)
      .then(res => setQuiz(res.data.quiz))
      .then((res) => console.log('here is the response', res))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/quizzes/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => console.log('messages is: ', messages))
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!quiz) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Quiz successfully deleted!' } }
    } />
  }

  return (
    <div>
      <h4>Quiz Name: {quiz.name}</h4>
      <p>Description: {quiz.description}</p>
      <button onClick={destroy}>Delete This Quiz</button>
      <Link to={`/quizzes/${props.match.params.id}/edit`}>
        <button>Edit Quiz</button>
      </Link>
      <Link to="/quiz-index">Back to all quizzes</Link>
    </div>
  )
}

export default Quiz
