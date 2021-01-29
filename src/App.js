import React from 'react';
import './App.css';
import Firefind from './components/Firefind'
import Firebase from './Firebase'

class App extends React.Component {
  render() {
    return (
      <div>
        <Firefind />
      </div>
    );
  }
}

export default App;
