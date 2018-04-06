import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filter, currentFilter, updateFilter}) => {

  return (
    <div className="fruit-basket">
      <Filter handleChange={updateFilter} filter={filter} />
      <FilteredFruitList filter={currentFilter} fruit={fruit} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
}

export default FruitBasket;
