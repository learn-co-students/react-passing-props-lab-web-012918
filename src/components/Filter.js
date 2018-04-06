import React from 'react';

const Filter = ({filters, handleChange}) =>
  <select onChange={handleChange} defaultValue='all'>
    <option value='all'>All</option>
    {filters.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
    )}
  </select>


Filter.defaultProps = {
  filters: [],
  handleChange: function() {}
}

export default Filter;



//
//   render() {
//     return (
//       <select onChange={this.props.handleChange} defaultValue='all'>
//         <option value='all'>All</option>
//         {this.state.filters.map(filter =>
//           <option key={filter} value={filter}>{filter}</option>
//         )}
//       </select>
//     );
//   }
// }
