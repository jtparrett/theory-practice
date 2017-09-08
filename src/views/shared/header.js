import React from 'react'
import {Link} from 'react-router-dom'

export default () => (
  <header className="header">
    <h1>Theory Practice Online</h1>
    <nav>
      <ul className="header__list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  </header>
)