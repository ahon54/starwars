//import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';


import Details from './components/Details';
import Films from './components/Films'

export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/"  component={Films} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </Router>
  )
}

