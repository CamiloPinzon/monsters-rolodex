import 'App.css';
import { Component } from 'react';
import SearchBox from 'components/search-box/search-box.component';
import CardList from 'components/card-list/card-list.component';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters => this.setState({monsters: monsters}))
  }

  handleChangeMethod = e => {
    this.setState({ searchField: e.target.value })
  }
  
  render () {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase()
      .includes(searchField.toLocaleLowerCase())
      );
      return (
        <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder='Search Monster'
        handleChange = {this.handleChangeMethod}/>
        <CardList monsters= {filteredMonsters} />
        </div>
        );
      }
    }
    
    export default App;
