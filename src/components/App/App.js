import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import './App.scss'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Quizzes from '../Quiz/quiz-index'
import Quiz from '../Quiz/quiz-show'
import QuizCreate from '../Quiz/quiz-create'
import QuestionCreate from '../Quiz/Question/question-create'
import QuizUpdate from '../Quiz/quiz-update'
import QuestionIndex from '../Quiz/Question/question-index'
import QuestionShow from '../Quiz/Question/question-show'
import QuizTake from '../Quiz/quiz-take'
import QuestionUpdate from '../Quiz/Question/question-update'
import Hero from '../Hero'

// old quiz-index route, testing to see if the new syntax works (able to pass down current user id)
// <AuthenticatedRoute user={user} exact path='/quiz-index' component={Quizzes} />
//           <AuthenticatedRoute user={user} exact path='/quizzes/:id' component={Quiz} />

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          {/* <Route exact path="/" render={() => (
            user ? (<Redirect to="/sign-in"/>) : <Redirect to="/dashboard" />
          )}/> */}
          <Route path='/sign-up' render={() => (
            <div>
              <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
              <Hero />
            </div>
          )} />
          <Route path='/sign-in' user={user} render={() => (
            <div>
              <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
              <Hero />
            </div>
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/quiz-index/' render={() => (
            <Quizzes user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/quizzes/:id' render={({ match }) => (
            <Quiz match={match} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/quiz-create' render={({ match }) => (
            <QuizCreate user={user} match={match} />
          )} />
          <AuthenticatedRoute user={user} exact path='/question-create/:id' render={({ match, props }) => (
            <QuestionCreate user={user} match={match} props={props} quizId={match.params.id}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/quizzes/:id/edit' render={({ match }) => (
            <QuizUpdate user={user} match={match} quizId={match.params.id}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/question-index/:id' render={({ match }) => (
            <QuestionIndex user={user} match={match} />
          )} />
          <AuthenticatedRoute user={user} exact path='/questions/:id' render={({ match }) => (
            <QuestionShow user={user} match={match} />
          )} />
          <AuthenticatedRoute user={user} exact path='/questions/:id/edit' render={({ match }) => (
            <QuestionUpdate user={user} match={match} questionId={match.params.id} />
          )} />
          <AuthenticatedRoute user={user} exact path='/quiz-take/:id' render={({ match, props }) => (
            <QuizTake user={user} match={match} props={props} quizId={match.params.id}/>
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
