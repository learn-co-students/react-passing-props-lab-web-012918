import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      filters: [],
      fruit: [],
      items: '',
      currentFilter: null
    }
  }


  // handleFilterChange = event => {
  //   console.log('new filter: ', event.target.value);
  //   this.setState({ selectedFilter: event.target.value });
  // }

  render() {
    return (
      <FruitBasket filters={this.state.filters} selectedFilter={this.state.currentFilter} fruit={this.state.fruit} items={this.state.items}/>
    )
  }
}

export default App;
