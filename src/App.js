import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import CharacterContainer from './Container/CharacterContainer';
import Header from './Component/Header';



class App extends Component {
    render() {

      return (

        <>
          <Header text ="Study-Hall Practice" />
          <CharacterContainer />
        
        </>



      );
   }
}

export default App;
