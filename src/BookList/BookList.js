import React, {Component} from 'react';
import Book from '../Book/Book';

export default class BookList extends Component {
  render() {
    const books = [<Book key={0} />]
    return (
      
      <ul className='booklist'>
        {books}
      </ul>
    )
  }
}