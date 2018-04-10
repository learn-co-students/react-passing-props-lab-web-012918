import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{
  state={
    fruit: [],
    filters: [],
    currentFilter: null
  }

  render(){
    return(
      <FruitBasket />
    )
  }
}

export default App;
