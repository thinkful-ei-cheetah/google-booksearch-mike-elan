import React, {Component} from 'react';

export default class FilterOptions extends Component {
  render() {
    return (
      <div>
        <label htmlFor="print-type">Print Type: </label>
        <select id="print-type" className="print-type" value="all">
          <option value="all">All</option>
          <option value="ebooks">Books</option>
          <option value="free-ebooks">Magazines</option>
        </select>
        <label htmlFor="book-type">Book Type: </label>
        <select id="" className="book-type" value="no-filter">
          <option value="no-filter">No Filter</option>
          <option value="ebooks">Ebooks</option>
          <option value="free-ebooks">Free Ebooks</option>
          <option value="full">Full</option>
          <option value="paid-ebooks">Paid Ebooks</option>
          <option value="partial">Partial</option>
        </select>
      </div>
    )
  }
}