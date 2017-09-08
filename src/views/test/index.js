import React from 'react'
import {Link} from 'react-router-dom'

import Questions from './questions'

export default class extends React.Component {
  state = {
    index: 0
  }

  change = direction => () => {
    this.setState(state => ({
      index: Math.max(Math.min(state.index + direction, Questions.length - 1), 0)
    }))
  }

  finnish = () => {

  }

  render() {
    const {index} = this.state
    const question = Questions[index]
    return (
      <div>
        <h3>Question: { question.text }</h3>
        <div key={index}>
        { question.answers.map((a, i) => (
          <div key={i}>
            <input type="checkbox" id={`${index}-${i}`} />
            <label htmlFor={`${index}-${i}`}>{a}</label>
          </div>
        )) }
        </div>

        <button onClick={this.change(-1)}>Previous</button>
        { index >= Questions.length - 1 ? (
          <button onClick={this.finnish}>Finnish</button>
        ) : (
          <button onClick={this.change(1)}>Next</button>
        )}
      </div>
    )
  }
}