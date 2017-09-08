import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import HomeIndex from './home'
import AboutIndex from './about'
import TestIndex from './test'

import Header from './shared/header'

const PageNotFound = () => (
  <div>
    <h2>Page Not Found.</h2>
    <Link to="/">Go Home</Link>
  </div>
)

export default class extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main className="wrapper">
          <Header />
          <Switch>
            <Route path='/' exact component={HomeIndex} />
            <Route path='/about' component={AboutIndex} />
            <Route path='/test' exact component={TestIndex} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}