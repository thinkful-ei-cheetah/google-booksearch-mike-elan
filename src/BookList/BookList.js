import React, {Component} from 'react';
import Book from '../Book/Book';

export default class BookList extends Component {
  render() {
    const books = this.props.books.map((book, index) => {
      return <Book {...book} key={index}/>
    })
    return (
      <ul className='booklist'>
        {books}
      </ul>
    )
  }
}