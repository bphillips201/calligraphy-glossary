import '../styles/Search.css';

import React, { Component } from 'react';

class Search extends Component {

  state = {
    query: ""
  }

  updateQuery = (e) => {
    this.setState({ query: e })
  }

  render() {
    const { query } = this.state;

    return (
      <div className="search">
        <input 
          type="text" 
          placeholder="Search for terms..." 
          value={query} 
          onChange={(event) => this.updateQuery(event.target.value)} 
        />
      </div>
    )
  }
}

export default Search;