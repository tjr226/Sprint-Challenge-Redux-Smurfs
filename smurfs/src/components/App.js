import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';
import Smurf from './Smurf';
import AddSmurf from './AddSmurf';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfList.map(smurf => {
          return <Smurf 
              key={smurf.id}
              id={smurf.id}
              name={smurf.name}
              age={smurf.age}
              height={smurf.height}
              />
        })}
        <AddSmurf />
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  smurfList: state.smurfs
})

export default connect(
      mapStateToProps,
      { getSmurfs }
  )(App)
