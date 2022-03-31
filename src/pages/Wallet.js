import React from 'react';
import Form from '../Components/Form';
import Header from '../Components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>Wallet</p>
        <Form />
      </div>
    );
  }
}

export default Wallet;
