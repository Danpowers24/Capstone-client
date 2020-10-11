import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
// import Layout from '../shared/Layout'

const Quizzes = (props) => {
  const [quizzes, setQuizzes] = useState([])
  
  useEffect(() => {
    axios({
      url: apiUrl + '/quizzes',
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => setQuizzes(res.data.quizzes))
      .catch(console.error)
  }, [])
  
  console.log('in quiz-index quizzes are', quizzes)

  // Define userId as the user who is currently signed in
  const userId = props.user.id

  // Loop through each quiz object that comes back from the axios call
  const quizzesJsx = quizzes.map(quiz => {
    // Each quiz will have a user object with an id, indicating which user created the quiz
    // Check if the user that is currently logged in is the same user that created the quiz
    if (userId === quiz.user.id) {
      // if it's a match, display the quiz name with a link to that quiz (quiz-show.js)
      return (
        <li key={quiz.id} className='quiz-index-item'>
          <Link to={`/quizzes/${quiz.id}`}>{quiz.name}</Link>
        </li>
      )
    }
  })

  return (
    <div className="quiz-index-container">
      <h4>Quizzes</h4>
      <ul className="quiz-index-list">
        {quizzesJsx}
      </ul>
    </div>
  )
}

export default Quizzes
