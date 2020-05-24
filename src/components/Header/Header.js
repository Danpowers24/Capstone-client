import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// I have removed this feature for resubmittal purposes
// In future iterations, I will have some basic content for the home page
// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link to="/">Home</Nav.Link>
//   </Fragment>
// )

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#quiz-index">See All Quizzes</Nav.Link>
    <Nav.Link href="#quiz-create">Create New Quiz</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

// In future iterations, add alwaysOptions to rendered components list (between lines 38 and 39)
const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      MESA - Medical Education Study Application
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
