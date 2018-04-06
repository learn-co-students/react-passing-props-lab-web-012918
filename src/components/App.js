import React from 'react';

import FruitBasket from './FruitBasket';
// import Filter from './Filter'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit()
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  updateFilter = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        updateFilter={this.updateFilter}
      />
    )
  }
}

export default App;
