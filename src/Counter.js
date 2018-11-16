import React, { Component } from 'react';

class Counter extends Component {
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
        <button>-</button>
        <button style={{ marginLeft: '20px' }}>+</button>
        <div
          style={{
            marginLeft: '20px',
            fontWeight: 'bold',
            fontSize: '30px',
            fontFamily: 'Roboto'
          }}
        >
          19
        </div>
      </div>
    );
  }
}

export default Counter;
