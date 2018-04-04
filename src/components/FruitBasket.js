import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {

  console.log(props)

  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleFilterChange} filters={props.filters} />
      <FilteredFruitList filter={props.selectedFilter} fruit={props.fruit}/>
    </div>
  )
}

FruitBasket.defaultProps = {
  filters: [],
  selectedFilter: null,
  fruit: null,
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
