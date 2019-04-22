import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterOptions from './FilterOptions/FilterOptions';
import './SearchAndFilter.css';

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
      <form className='filter-options' onSubmit={(e) => {this.formSubmit(e)}}>
        <SearchBar 
            searching={this.props.searching} 
            searchTerm={this.state.searchTerm} 
            handleSearch={this.updateSearchTerm}/>
        <FilterOptions 
            printType={this.state.printType} 
            bookType={this.state.bookType}
            handlePrintFilter={this.updatePrintType}
            handleBookType={this.updateBookType}/>
          <div className="center">
            <button type="submit" className="search-btn">Search</button>
          </div>
      </form>
    )
  }
}

export default SearchAndFilter
