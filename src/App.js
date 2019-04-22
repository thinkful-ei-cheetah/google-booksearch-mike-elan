import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterOptions from './FilterOptions/FilterOptions';
import BookList from './BookList/BookList';

class App extends Component {
  state = {
    books: []
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Google Book Search
        </header>
        < SearchBar />
        < FilterOptions />
        < BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
