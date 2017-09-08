import React from 'react'
import {Link} from 'react-router-dom'

export default class extends React.Component {
  render() {
    return (
      <section className="section">
        <p className="section__copy">This is a website to practice the multiple choice part of your theory driving test.</p>
        <Link to="/test">Take the test</Link>
      </section>
    )
  }
}