import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  console.log(props)
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleChange} filters={props.filters}/>
      <FilteredFruitList filter={props.currentFilter} fruit={props.fruit}/>
    </div>
  )
}

FruitBasket.defaultProps = {
  filters: [],
  fruit: [],
  currentFilter: '',
  updateFilterCallback: ()=>{}
}

export default FruitBasket;
