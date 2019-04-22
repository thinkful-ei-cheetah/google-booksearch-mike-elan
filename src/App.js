import React, { Component } from 'react';
import './App.css';
import BookList from './BookList/BookList';
import SearchAndFilter from './SearchAndFilter';

class App extends Component {
  state = {
    books: [],
    searching: false,
    query: ''
  }

  api_key = 'AIzaSyB7LgiNiowlLSVTvCtGGT0dzxRe17SA-cI';
  url = 'https://www.googleapis.com/books/v1/volumes';

  searchQuery = (searchTerm, printType, bookType) => {
    let q = `?q=${searchTerm}&printType=${printType}`;
    if (bookType !== 'No Filter') {
      q += `&filter=${bookType}`;
    }
    this.setState({
      query: q
    }, this.fetchBooks)
  }

  fetchBooks = () => {
    fetch(`${this.url}${this.state.query}`)
    .then(res => {
      if(!res.ok) {
        throw new Error('Response was not okay.')
      }
      return res.json();
    })
    .then(data => {
      console.log(data)
      const books = data.items.map(item => {
        let book = {}
        book.author = item.volumeInfo.authors
        book.description = item.volumeInfo.description
        book.thumbnail = item.volumeInfo.imageLinks.thumbnail || 'https://dummyimage.com/300'
        book.title = item.volumeInfo.title

        try {
          if (item.saleInfo.saleability === 'NOT_FOR_SALE') {
            book.price = 'Not For Sale'
          } else {
            book.price = Number.parseFloat(item.saleInfo.listPrice.amount).toFixed(2)
          }
        } catch(err) {
          book.price = 'Sale price not found'
        }
        
        return book;
      })
      this.setState({
        books
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div className="search">
          <header className="App-header">
            <h1>Google Book Search</h1>
          </header>
          <SearchAndFilter searching={this.state.searching} handleSearch={this.searchQuery} />
        </div>
        < BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
