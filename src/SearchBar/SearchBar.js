import React, {Component} from 'react';

export default class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }
  
  render() {
    return (
      <form className='search-bar' onSubmit={(e) => {this.formSubmit(e)}}>
        <label htmlFor="">Search: </label>
        <input type="text" onChange={e => this.setState({ searchTerm: e.target.value })}/>
        <button type="submit" className="search-btn">Search</button>
      </form>
    )
  }
}