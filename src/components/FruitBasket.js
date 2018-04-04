import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     filters: [],
  //     selectedFilter: null
  //   };
  // }
  //
//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     return this.props.selectedFilter = event.target.value
//   }
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} filters={this.props.filters}/>
//         <FilteredFruitList
//           filter={this.props.selectedFilter} fruit={this.props.fruit} items={this.props.items}/>
//       </div>
//     );
//   }
// }



const FruitBasket = (props) => {

  const handleFilterChange = (event) => {
    return this.props.selectedFilter = event.target.value
  }

  FruitBasket.defaultProps = {
    fruit: props.fruit,
    filters: props.filters,
    currentFilter: props.selectedFilter,
    items: props.items,
    updateFilterCallback: handleFilterChange
  }

  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilter} filters={props.filters}/>
      <FilteredFruitList
        filter={props.currentFilter} fruit={props.fruit} items={props.items}/>
    </div>
  );


}


export default FruitBasket;
