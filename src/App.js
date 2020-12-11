import React from 'react'
import './App.css'
import {SearchBox} from './components/search-box/search-box.component'
import {CardList} from './components/card-list/card-list.component'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }



  render(){

    // object detructuring
    const {monsters, searchField} = this.state

    // const filterMonsters = monsters.filter(
    //   monster => monster.name.includes(searchField)
    //)

    return(
      <div className='App'>
        <h1>Monster's Rolledex</h1>
        <SearchBox onSearchChange = {this.onSearchChange} />
        <CardList monsters = {this.state.monsters}/>
      </div>
    )
  }
}

export default App;
