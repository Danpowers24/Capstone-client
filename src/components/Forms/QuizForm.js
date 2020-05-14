import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const divStyle = {
  textAlign: 'center'
}

// wait, create the questions resource adn figure that out and then come back and make this form

const QuizForm = ({ quiz, handleChange, handleSubmit, cancelPath }) => (
  <div>
    <h3 style={divStyle}>Create a New Quiz!</h3>
    <Form onSubmit={handleSubmit}>
      <Form.Label>Title</Form.Label>
      <Form.Control
        placeholder="A cool quiz"
        value={quiz.name}
        name="name"
        onChange={handleChange}
      />

      <Form.Label>Description</Form.Label>
      <Form.Control
        placeholder="something about this cool quiz"
        value={quiz.description}
        name="description"
        onChange={handleChange}
      />

      <Button type="submit">Submit</Button>
      <Link to={cancelPath}>
        <Button>Cancel</Button>
      </Link>
    </Form>
  </div>
)

export default QuizForm
