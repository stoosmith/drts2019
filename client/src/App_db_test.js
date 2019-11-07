import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {
  state = {
    leagues: null
  }

  componentDidMount(){
    axios.get('/api/get/league/1')
      .then(res => this.setState({leagues: res.data}))
      .catch(err => console.log(err) )
  }

  render() {
    return (
      <div>
        {this.state.leagues
        ? <div> {console.log(this.state.leagues[0])}  <div> {this.state.leagues[0].league_name} </div></div>
        : <div>No Leagues Found</div> }
      </div>
    );
  }
  
}

export default App;
