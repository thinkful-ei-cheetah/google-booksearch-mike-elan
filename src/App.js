import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterOptions from './FilterOptions/FilterOptions';
import BookList from './BookList/BookList';

class App extends Component {
  state = {
    books: [],
    searching: false,
    searchTerm: ''
  }

  api_key = 'AIzaSyB7LgiNiowlLSVTvCtGGT0dzxRe17SA-cI';
  url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`;

  updateSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
    this.getSearchItems();
  }

  getSearchItems = () => {
    fetch(this.url)
    .then(res => {
      if(!res.ok) {
        throw new Error('Response was not okay.')
      }
      return res.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        < SearchBar searching={this.state.searching} searchTerm={this.state.searchTerm} handleSearch={this.updateSearchTerm} />
        < FilterOptions />
        < BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
