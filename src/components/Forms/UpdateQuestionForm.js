import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const divStyle = {
  textAlign: 'center'
}

// wait, create the questions resource adn figure that out and then come back and make this form

const UpdateQuestionForm = ({ question, handleChange, handleSubmit, cancelPath }) => (
  <div>
    <h3 style={divStyle}>Update this Question!</h3>
    <Form onSubmit={handleSubmit}>
      <Form.Label>Question</Form.Label>
      <Form.Control
        placeholder="What is the meaning of life?"
        value={question.question}
        name="question"
        onChange={handleChange}
      />

      <Form.Label>Possible Answers</Form.Label>
      <Form.Control
        placeholder="To be happy"
        value={question.answer1}
        name="answer1"
        onChange={handleChange}
      />

      <Form.Control
        placeholder="To make others happy"
        value={question.answer2}
        name="answer2"
        onChange={handleChange}
      />

      <Form.Control
        placeholder="To do good"
        value={question.answer3}
        name="answer3"
        onChange={handleChange}
      />

      <Form.Control
        placeholder="To survive"
        value={question.answer4}
        name="answer4"
        onChange={handleChange}
      />

      <Form.Label>Correct Answer</Form.Label>
      <Form.Control
        placeholder="Drop down... answer1/2/3/4"
        value={question.answerkey}
        name="answerkey"
        onChange={handleChange}
      />

      <Button type="submit">Submit</Button>
      <Link to={cancelPath}>
        <Button>Cancel</Button>
      </Link>
    </Form>
  </div>
)

export default UpdateQuestionForm
