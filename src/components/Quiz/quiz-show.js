import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'
import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'
// import Layout from '../shared/Layout'

let quizid = ''

const Quiz = (props) => {
  console.log('these are the props', props)
  const [ quiz, setQuiz ] = useState(null)
  const [ deleted, setDeleted ] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/quizzes/${props.match.params.id}`)
      .then(res => setQuiz(res.data.quiz))
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
    return <Redirect to='/quiz-index/' />
  }

  // this is the syntax for including a message to the user
  // I don't know how to implement both correctly yet
  // if (deleted) {
  //   return <Redirect to={
  //     { exactpathname: '/quiz-index/', state: { msg: 'Quiz successfully deleted!' } }
  //   } />
  // }

  quizid = quiz.id
  console.log('quizId is ', quizid)

  return (
    <div>
      <h4>Quiz Name: {quiz.name}</h4>
      <p>Description: {quiz.description}</p>
      <Link to={`/quiz-take/${props.match.params.id}`} props={props} quizid={quizid}>
        <Button className='btn-primary'>Take This Quiz</Button>
      </Link>
      <Button className='btn-danger' onClick={destroy}>Delete This Quiz</Button>
      <Link to={`/quizzes/${props.match.params.id}/edit`}>
        <button>Edit Quiz</button>
      </Link>
      <Link to={`/question-create/${props.match.params.id}`}>
        <button>Create Question</button>
      </Link>
      <Link to={`/question-index/${props.match.params.id}`} quizid={quizid}>
        <button>See All Questions</button>
      </Link>
      <Link to="/quiz-index">Back to All quizzes</Link>
    </div>
  )
}

export default Quiz
export { quizid }
