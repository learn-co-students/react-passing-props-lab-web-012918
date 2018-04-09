import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => {

    return (
      <div className="fruit-basket">
        <Filter handleChange={props.updateFilterCallback} filters={props.filters} />
        <FilteredFruitList
          filter={props.selectedFilter} fruit={props.fruit} />
      </div>
    );
}

FruitBasket.defaultProps = {
  filters: [],
  fruit: [],
  currentFilter: null,
  selectedFilter: null,
  updateFilterCallback: () => {}
}

export default FruitBasket;
