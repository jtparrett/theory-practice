import React from 'react'
import {Link} from 'react-router-dom'

import Questions from './questions'

export default class extends React.Component {
  state = {
    index: 0
  }

  next = () => {
    this.setState(state => ({
      index: ++state.index % Questions.length
    }))
  }

  render() {
    const question = Questions[this.state.index]
    return (
      <div>
        <h2>Test</h2>
        <h3>Question: { question.text }</h3>
        { question.answers.map((a, i) => (
          <div key={i}>
            <input type="checkbox" id={i} />
            <label htmlFor={i}>{a}</label>
          </div>
        )) }

        <button onClick={this.next}>Next</button>
      </div>
    )
  }
}