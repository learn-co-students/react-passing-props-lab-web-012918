import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentDidMount(){
    this.fetchFilters()
    this.fetchFruit()
  }

  handleChange = (event) => {
    this.setState({currentFilter: event.target.value})
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
    .then(response => response.json())
    .then(filters => this.setState({ filters: filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit: items }));
  }

  render(){
    return(
      <div>
        <FruitBasket handleChange={this.handleChange} fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter}/>
      </div>
    )
  }
}

export default App;
