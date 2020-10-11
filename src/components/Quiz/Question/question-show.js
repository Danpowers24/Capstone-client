import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { quizId } from '../quiz-show'
// import messages from '../../AutoDismissAlert/messages'
import apiUrl from '../../../apiConfig'

let questionId

const QuestionShow = (props) => {
  // console.log('in question-show, props:', props)
  // console.log('in question-show, quizid:', quizId)

  const [ question, setQuestion ] = useState(null)
  const [ deleted, setDeleted ] = useState(false)

  console.log('in question-show.js, question is: ', question)

  useEffect(() => {
    axios({
      url: `${apiUrl}/questions/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => setQuestion(res.data.question))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/questions/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      // .then(() => console.log('messages is: ', messages))
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  questionId = props.match.params.id

  if (!question) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={`/quizzes/${quizId}`}/>
  }

  return (
    <div>
      <h4>Question: {question.question}</h4>
      <h5>Answer 1: {question.answer1}</h5>
      <h5>Answer 2: {question.answer2}</h5>
      <h5>Answer 3: {question.answer3}</h5>
      <h5>Answer 4: {question.answer4}</h5>
      <h5>Correct Answer: {question.answerkey}</h5>

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
export { questionId }
