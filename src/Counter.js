import React, { Component } from 'react';

//Orienté Objet
class Counter extends Component {
  state = {
    valueCounter: 0
  };

  increment = () => {
    this.setState({ valueCounter: this.state.valueCounter - 1 });
  };

  decrement = () => {
    this.setState({ valueCounter: this.state.valueCounter + 1 });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: 'palevioletred',
          border: '1px solid black',
          width: '400px',
          height: '100px',
          marginTop: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <button onClick={this.increment}>-</button>
        <button style={{ marginLeft: '20px' }} onClick={this.decrement}>
          +
        </button>
        <div
          style={{
            marginLeft: '20px',
            fontWeight: 'bold',
            fontSize: '30px',
            fontFamily: 'Roboto'
          }}
        >
          {this.state.valueCounter}
        </div>
      </div>
    );
  }
}

export default Counter;
