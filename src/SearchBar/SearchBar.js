import React, {Component} from 'react';
import './SearchBar.css'

export default class SearchBar extends Component {

  render() {
    return (
      <div className="search-bar">
        <label htmlFor="search">Search: </label>
        <input className="input-field" type="text" value={this.props.searchTerm} id='search' onChange={e => this.props.handleSearch(e.target.value)}/>
      </div>
    )
  }
}