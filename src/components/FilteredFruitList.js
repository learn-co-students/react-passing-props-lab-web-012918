import React, { Component } from 'react';

// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: []
//     };
//   }
//
//   componentDidMount() {
//     fetch('/api/fruit')
//       .then(response => response.json())
//       .then(items => this.setState({ items }));
//   }
//
//   render() {
//     const list = !this.props.filter || this.props.filter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);
//
//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );
//   }
// }



const FilteredFruitList= (props) => {

  FilteredFruitList.defaultProps = {
    fruit: props.fruit,
    filter: props.filter,
    items: props.items
  };

  const list = !props.filter ? props.fruit : props.fruit.filter(item => item.fruit_type === props.filter)

  console.log(props.fruit)
  console.log(props.filter)
  console.log(props.items)

  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );

}

export default FilteredFruitList;
