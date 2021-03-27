// packages

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// components

import Home from './components/Home/Home'
import PubIndex from './components/pub/PubIndex'
import Footer from './components/Footer'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import PubShow from './components/pub/PubShow'
import PubSaved from './components/loggedin/PubSaved'
import BecomeLandlord from './components/auth/BecomeLandlord'
import Profile from './components/loggedin/Profile'
import PubIndexCities from './components/pub/PubIndexCities'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pubs">
          <PubIndex />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/pubs/:id">
          <PubShow />
        </Route>
        <Route exact path="/pubs/filter-pubs/:city">
          <PubIndexCities />
        </Route>
        <Route exact path="/savedpubs">
          ( not sure what end point this should be)
          <PubSaved />
        </Route>
        <Route exact path="/landlord">
          <BecomeLandlord />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
