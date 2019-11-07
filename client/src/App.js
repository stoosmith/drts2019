import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import App_db_test from './App_db_test'

class App extends Component {


  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={App_db_test} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
