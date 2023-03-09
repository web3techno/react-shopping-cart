import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        <div className='filter-result'>
            {this.props.count} Products
        </div>
        <div className='filter-dort'>
            Order {" "}
            <select value={this.props.sort} onChange={this.props.sortProducts}>
                <option>Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>
        </div>
        <div className='filter-size'>
            Filter {" "}
            <select value={this.props.size} onChange={this.props.filterProducts}>
                <option value="">All</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">MS</option>
                <option value="L">LS</option>
                <option value="XL">XLS</option>
                <option value="XXL">XXL</option>
            </select>
        </div>
      </div>
    )
  }
}
