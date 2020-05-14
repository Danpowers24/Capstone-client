import React, { Fragment } from 'react'

const QuizForm = ({ questions, handleChange, handleSubmit, cancelPath, questionAnswerId }) => (
  <Fragment>
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12">

          <form>

            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value={questions.answer1}
                  checked={questionAnswerId === 'answer1'}
                  className="form-check-input"
                  onChange={handleChange}
                />
                {questions.answer1}
              </label>
            </div>

            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="option2"
                  checked={questionAnswerId === 'answer2'}
                  className="form-check-input"
                  onChange={handleChange}
                />
                Option 2
              </label>
            </div>

            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="option3"
                  checked={questionAnswerId === 'answer3'}
                  className="form-check-input"
                  onChange={handleChange}
                />
                Option 3
              </label>
            </div>

            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="option4"
                  checked={questionAnswerId === 'answer4'}
                  className="form-check-input"
                  onChange={handleChange}
                />
                Option 3
              </label>
            </div>

            <div className="form-group">
              <button className="btn btn-primary mt-2" type="submit">
                Save
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </Fragment>
)

export default QuizForm
