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
  url = 'https://www.googleapis.com/books/v1/volumes';

  updateSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    }, this.fetchBooks)
  }

  fetchBooks = () => {
    console.log('search term: ', this.state.searchTerm);
    fetch(`${this.url}?q=${this.state.searchTerm}`)
    .then(res => {
      if(!res.ok) {
        throw new Error('Response was not okay.')
      }
      return res.json();
    })
    .then(data => {
      const books = data.items.map(item => {
        let book = {}
        book.author = item.volumeInfo.authors
        book.description = item.volumeInfo.description
        book.thumbnail = item.volumeInfo.imageLinks.thumbnail
        book.title = item.volumeInfo.title
        try {
          if (item.saleInfo.saleability === 'NOT_FOR_SALE') {
            book.price = 'Not For Sale'
          } else {
            book.price = item.saleInfo.saleability['FOR_SALE']['listPrice']['amount']
          }
        } catch(err) {
          book.price = 'Not For Sale'
        }
        
        return book;
      })
      console.log(books)
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        < SearchBar searching={this.state.searching} handleSearch={this.updateSearchTerm} />
        < FilterOptions />
        < BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
