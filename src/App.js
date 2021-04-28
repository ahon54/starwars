//import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


import Details from './components/Details';
import Films from './components/Films'

export default function App() {
  return (
    <Router>
      {/* {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading Test </Loader>
        </Dimmer>
      ) : ( */}
        <Switch>
        <Route exact path="/"  component={Films} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
      {/* )} */}
    </Router>
  )
}

