import React, { Component } from 'react';
import 'C:/Users/Tadeusz/my-app/src/Styles/App.css';

import Header from './Header'
import SearchBar from './SearchBar';
import Character from './Character';

class App extends Component {
  constructor(){
    super()
    this.state={
      userInput: "",
      allCharacterData: [],
      characterData: {}
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/people/').then(response => response.json()).then(response => {
      const results = response.results
      this.setState({ characterData: results })
  })
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchBar/>
        <Character/>
      </div>
    );
  }
}

export default App;
