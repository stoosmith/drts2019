import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import App_db_test from './App_db_test';

import Header from './components/header/header.component';
import AdminPanel from './components/admin-panel/admin-panel.component';
import AdminLeagues from './pages/admin-leagues/admin-leagues';
import LeagueAdd from './components/league-add/league-add.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isAdmin: false
    }

  }

  render() {
    return (
      <div>
        <Header/>
        {this.state.isAdmin ? <AdminPanel/> : null}
        <Switch>
          <Route exact path='/' component={App_db_test} />
          <Route exact path='/admin' component={AdminPanel} />
          <Route exact path='/admin/leagues' component={AdminLeagues} />
          <Route exact path='/admin/leagues/add' component={LeagueAdd} />
        </Switch>
      </div>
    );
  }

}

export default App;
