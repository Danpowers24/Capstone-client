import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
// import messages from '../AutoDismissAlert/messages'
import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'
// import Layout from '../shared/Layout'

let quizId = ''

const Quiz = (props) => {
  console.log('quiz-show props', props)
  const [ quiz, setQuiz ] = useState(null)
  const [ deleted, setDeleted ] = useState(false)

  const quizID = props.match.params.id

  useEffect(() => {
    axios({
      url: apiUrl + '/quizzes/' + quizID,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => setQuiz(res.data.quiz))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/quizzes/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      // .then(() => console.log('messages is: ', messages))
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

  quizId = quiz.id
  // console.log('quizId is ', quizId)

  return (
    <div className='quiz-show-container'>
      <h4>{quiz.name}</h4>
      <p>Description: {quiz.description}</p>
        <div className='quiz-show-buttons'>
          <Link to={`/quiz-take/${quizID}`} props={props} quizid={quizId}>
            <Button className='btn-success'>Take This Quiz</Button>
          </Link>
          <Link to={{ pathname: `/quizzes/${quizID}/edit`, props: { quizName: quiz.name, quizDescription: quiz.description } }} >
            <Button>Edit Quiz</Button>
          </Link>
          <Link to={`/question-create/${quizID}`}>
            <Button>Create Question</Button>
          </Link>
          <Link to={`/question-index/${quizID}`} quizid={quizId}>
            <Button>See All Questions</Button>
          </Link>
          <Button className='btn-danger' onClick={destroy}>Delete This Quiz</Button>
          <Link to="/quiz-index">Back to all quizzes</Link>
        </div>
    </div>
  )
}

export default Quiz
export { quizId }
