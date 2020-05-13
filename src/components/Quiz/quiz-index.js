import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
// import Layout from '../shared/Layout'

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([])

  // constructor (props) {
  //   super(props)
  //
  //   this.state = {
  //     quizzes: []
  //   }
  // }

  useEffect(() => {
    axios(`${apiUrl}/quizzes`)
      .then(res => setQuizzes(res.data.quizzes))
      .catch(console.error)
  }, [])

  // componentDidMount () {
  //   axios(`${apiUrl}/quizzes`)
  //     .then(res => this.setState({ movies: res.data.quizzes }))
  //     .catch(console.error)
  // }

  const quizzesJsx = quizzes.map(quiz => (
    <li key={quiz.id}>
      <Link to={`/quizzes/${quiz.id}`}>{quiz.name}</Link>
    </li>
  ))

  return (
    <div>
      <h4>Quizzes</h4>
      <ul>
        {quizzesJsx}
      </ul>
    </div>
  )
}

export default Quizzes
