import './App.css';
import Hangman from './components/hangman';
import React from 'react';


class App extends React.Component{
  constructor(props:string) {
    super(props);
    this.state = {
      headVisibility: 'hidden',
      bodyVisibility: 'hidden',
      leftArmVisibility: 'hidden',
      rightArmVisibility: 'hidden',
      leftLegVisibility: 'hidden',
      rightLegVisibility: 'hidden',
      chairVisibility: 'hidden'
    }
    
  }

  render() {
    return (
     <Hangman
   
     />
    
    )
  }
}




export default App;
