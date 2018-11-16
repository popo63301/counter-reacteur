import React, { Component } from 'react';
import Counter from './Counter';

//JSX = Javascript Extended

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default App;
