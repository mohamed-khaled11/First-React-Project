import React, { Component } from 'react';
import Header from './Header';
import Text from './Text';
import Social from './Social';
import Card from './Card';

class App extends Component {
  render(){
    return (
      // JSX comming from react libirary
    <div className='container'>
    <Header></Header>
    <Text></Text>
    <Social></Social>
    <Card></Card>
  </div>
    );
  }
}

export default App;
