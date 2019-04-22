import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterOptions from './FilterOptions/FilterOptions';

export class SearchAndFilter extends Component {
  state = {
    searchTerm: '',
    printType: 'All',
    bookType: 'No Filter',
  }

  formSubmit = (e) => {
    const { searchTerm, printType, bookType } = this.state;
    e.preventDefault();
    this.props.handleSearch(searchTerm, printType, bookType);
    this.setState({searchTerm: ''});
  }

  updateSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm
    })
  }

  updatePrintType = (printType) => {
    this.setState({
      printType
    })
  }

  updateBookType = (bookType) => {
    this.setState({
      bookType
    })
  }

  render() {
    return (
      <form className='search-bar' onSubmit={(e) => {this.formSubmit(e)}}>
        <SearchBar 
            searching={this.props.searching} 
            searchTerm={this.state.searchTerm} 
            handleSearch={this.updateSearchTerm}/>
        <FilterOptions 
            printType={this.state.printType} 
            bookType={this.state.bookType}
            handlePrintFilter={this.updatePrintType}
            handleBookType={this.updateBookType}/>
        <button type="submit" className="search-btn">Search</button>
      </form>
    )
  }
}

export default SearchAndFilter
