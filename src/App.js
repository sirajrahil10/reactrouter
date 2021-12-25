import React from 'react'
import {  Route , Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Menu from './Menu'

const App = () => {
  return (
    <div>
<Menu/>
<Switch>
  <Route exact path='/' component={Home} />
  <Route path='/about' component={About} />
  <Route path='/contact' component={Contact} />
</Switch>
    </div>
  )
}

export default App

