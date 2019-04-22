import React, {Component} from 'react';

export default class FilterOptions extends Component {
  render() {
    return (
      <div>
        <label htmlFor="print-type">Print Type: </label>
        <select id="print-type" className="print-type" value={this.props.printType} onChange={(e) => {this.props.handlePrintFilter(e.target.value)}}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label htmlFor="book-type">Book Type: </label>
        <select id="" className="book-type" value={this.props.bookType} onChange={(e) => {this.props.handleBookType(e.target.value)}}>
          <option value="No Filter">No Filter</option>
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