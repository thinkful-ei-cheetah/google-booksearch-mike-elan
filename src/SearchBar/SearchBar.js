import React, {Component} from 'react';

export default class SearchBar extends Component {

  render() {
    return (
      <React.Fragment>
        <label htmlFor="search">Search: </label>
        <input type="text" value={this.props.searchTerm} id='search' onChange={e => this.props.handleSearch(e.target.value)}/>
      </React.Fragment>
    )
  }
}