import React from 'react'
import {NavLink} from 'react-router-dom'

export default () => (
  <header className="header">
    <h1 className="header__title">Theory Practice Online</h1>
    <nav className="nav">
      <NavLink to="/" className="nav__link" exact activeClassName="nav__link--active">Home</NavLink>
      <NavLink to="/about" className="nav__link" activeClassName="nav__link--active">About</NavLink>
    </nav>
  </header>
)