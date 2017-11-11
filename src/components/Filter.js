import '../styles/Filter.css';
import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { glossary } = this.props;

    return (
      <ul className="filter">
        {glossary.map((l) => (
          <li key={l.letter}>
            <a href={`#${l.letter}`}>{l.letter}</a>
          </li>
        ))}
      </ul>
    )
  }
}

export default Filter;