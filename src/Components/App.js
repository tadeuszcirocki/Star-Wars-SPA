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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    let results = []
    for(let i=1; i<10; i++){
      fetch('https://swapi.co/api/people/?page=' + i)
      .then(response => response.json())
      .then(response => {
        results.push(...response.results)
        this.setState({ allCharacterData: results })
        })
    }
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const specificCharacterData = this.state.allCharacterData.find(obj => obj.name===this.state.userInput)
    this.setState({
      characterData: specificCharacterData
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchBar userInput={this.state.userInput} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Character characterData={this.state.characterData}/>
      </div>
    );
  }
}

export default App;
