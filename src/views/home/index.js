import React from 'react'
import {Link} from 'react-router-dom'

export default class extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/test">Take the test</Link>
      </div>
    )
  }
}