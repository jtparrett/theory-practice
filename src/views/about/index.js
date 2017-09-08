import React from 'react'
import {Link} from 'react-router-dom'

export default class extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>This is a website to practice the multiple choice part of your theory driving test.</p>
        <Link to="/test">Take the test</Link>
      </div>
    )
  }
}