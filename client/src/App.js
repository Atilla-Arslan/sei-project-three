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
import LandLordSignUp from './components/auth/LandLordSignUp'
import Review from './components/Modals/Forms/Review'
import EditProfile from '../src/components/Modals/Forms/EditProfile'
import DeleteProfile from './components/Modals/Forms/DeleteProfile'
import LoginToAddPub from './components/auth/LoginToAddPub'
import DeleteReview from './components/Modals/DeleteReview'
import DeletePub from './components/Modals/DeletePub'
import EditProfileImage from '../src/components/Modals/Forms/EditProfileImage'
import LandLordProfile from './components/loggedin/LandlordProfile'
import ModalRegister from './components/auth/ModalRegister'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pubs">
            <PubIndex />
          </Route>
          <Route exact path="/pubs/:id/submit-review">
            <Review />
          </Route>
          <Route exact path="/profile/:userID/edit">
            <EditProfile />
          </Route>
          <Route exact path="/profile/:userID/saved-pubs">
            <PubSaved />
          </Route>
          <Route exact path="/landlord-profile/:userID">
            <LandLordProfile />
          </Route>
          <Route exact path="/profile/:userID/edit-profile-image">
            <EditProfileImage />
          </Route>
          <Route exact path="/profile/delete-account/:userID/">
            <DeleteProfile />
          </Route>
          <Route
            exact
            path="/users/reviews/delete-review/:pubID/:reviewID"
          ></Route>
          <Route exact path="/pubs/:pubID/delete">
            <DeletePub />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/loginpub">
            <LoginToAddPub />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signup-modal">
            <ModalRegister />
          </Route>
          <Route exact path="/pubs/:pubID/reviews-delete/:reviewID">
            <DeleteReview />
          </Route>
          <Route exact path="/pubs/:id">
            <PubShow />
          </Route>
          <Route exact path="/pubs/filter-pubs/:city">
            <PubIndexCities />
          </Route>
          <Route exact path="/users/saved-pubs">
            <PubSaved />
          </Route>
          <Route exact path="/landlord">
            <BecomeLandlord />
          </Route>
          <Route exact path="/landlord/signup">
            <LandLordSignUp />
          </Route>
          <Route exact path="/profile/:userID">
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
